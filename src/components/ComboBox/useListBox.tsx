import React, {
  KeyboardEvent,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { tv } from 'tailwind-variants'

import { useEnhancedEffect } from '../../hooks/useEnhancedEffect'
import { useId } from '../../hooks/useId'
import { usePortal } from '../../hooks/usePortal'
import { useTheme } from '../../hooks/useTailwindTheme'
import { FaInfoCircleIcon } from '../Icon'
import { Loader } from '../Loader'

import { ListBoxItemButton } from './ListBoxItemButton'
import { ComboBoxItem, ComboBoxOption } from './types'
import { useActiveOption } from './useActiveOption'
import { usePartialRendering } from './usePartialRendering'

import type { DecoratorsType } from '../../types'

type Props<T> = {
  options: Array<ComboBoxOption<T>>
  dropdownHelpMessage?: ReactNode
  dropdownWidth?: string | number
  onAdd?: (label: string) => void
  onSelect: (item: ComboBoxItem<T>) => void
  isExpanded: boolean
  isLoading?: boolean
  triggerRef: RefObject<HTMLElement>
  decorators?: DecoratorsType<'noResultText'>
}

type Rect = {
  top: number
  left: number
  $width: number | string
  height?: number
}

const NO_RESULT_TEXT = '一致する選択肢がありません'

const listbox = tv({
  slots: {
    wrapper: 'shr-absolute',
    dropdownList: [
      'smarthr-ui-ComboBox-dropdownList',
      'shr-absolute shr-z-overlap shr-box-border shr-min-w-full shr-overflow-y-auto shr-rounded-m shr-bg-white shr-py-0.5 shr-shadow-layer-3',
      /* 縦スクロールに気づきやすくするために8個目のアイテムが半分見切れるように max-height を算出
      = (アイテムのフォントサイズ + アイテムの上下padding) * 7.5 + コンテナの上padding */
      'shr-max-h-[calc((theme(fontSize.base)_+_theme(spacing[0.5])_*_2)_*_7.5_+_theme(spacing[0.5]))]',
      'aria-hidden:shr-hidden',
    ],
    helpMessage:
      'shr-whitespace-[initial] shr-mx-0.5 shr-mb-0.5 shr-mt-0 shr-border-b shr-border-solid shr-border-default shr-px-0.5 shr-pb-0.5 shr-pt-0 shr-text-sm',
    loaderWrapper: 'shr-flex shr-items-center shr-justify-center shr-p-1',
    noItems: 'smarthr-ui-ComboBox-noItems shr-my-0 shr-bg-white shr-px-1 shr-py-0.5 shr-text-base',
  },
})

export const useListBox = <T,>({
  options,
  dropdownHelpMessage,
  dropdownWidth,
  onAdd,
  onSelect,
  isExpanded,
  isLoading,
  triggerRef,
  decorators,
}: Props<T>) => {
  const [navigationType, setNavigationType] = useState<'pointer' | 'key'>('pointer')
  const { activeOption, setActiveOption, moveActivePositionDown, moveActivePositionUp } =
    useActiveOption({ options })

  useEffect(() => {
    // 閉じたときに activeOption を初期化
    if (!isExpanded) {
      setActiveOption(null)
    }
  }, [isExpanded, setActiveOption])

  const listBoxRef = useRef<HTMLDivElement>(null)
  const [listBoxRect, setListBoxRect] = useState<Rect>({
    top: 0,
    left: 0,
    $width: 0,
  })

  const calculateRect = useCallback(() => {
    if (!listBoxRef.current || !triggerRef.current) {
      return
    }
    const rect = triggerRef.current.getBoundingClientRect()
    const bottomSpace = window.innerHeight - rect.bottom
    const topSpace = rect.top
    const listBoxHeight = Math.min(
      listBoxRef.current.scrollHeight,
      parseInt(getComputedStyle(listBoxRef.current).maxHeight, 10),
    )
    const offset = 2

    let top = 0
    let height: number | undefined = undefined

    if (bottomSpace >= listBoxHeight) {
      // 下側に十分なスペースがある場合は下側に通常表示
      top = rect.top + rect.height - offset + window.pageYOffset
    } else if (topSpace >= listBoxHeight) {
      // 上側に十分なスペースがある場合は上側に通常表示
      top = rect.top - listBoxHeight + offset + window.pageYOffset
    } else if (topSpace > bottomSpace) {
      // 上下に十分なスペースがなく、上側の方がスペースが大きい場合は上側に縮めて表示
      top = rect.top - topSpace + offset + window.pageYOffset
      height = topSpace
    } else {
      // 下側に縮めて表示
      top = rect.top + rect.height - offset + window.pageYOffset
      height = bottomSpace
    }

    setListBoxRect({
      top,
      left: rect.left + window.pageXOffset,
      $width: rect.width,
      height,
    })
  }, [listBoxRef, triggerRef])

  const activeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // actionOption の要素が表示される位置までリストボックス内をスクロールさせる
    if (
      navigationType !== 'key' ||
      activeOption === null ||
      !activeRef.current ||
      !listBoxRef.current
    ) {
      return
    }
    const activeRect = activeRef.current.getBoundingClientRect()
    const containerRect = listBoxRef.current.getBoundingClientRect()

    const isActiveTopOutside = activeRect.top < containerRect.top
    const isActiveBottomOutside = activeRect.bottom > containerRect.bottom

    if (isActiveTopOutside) {
      listBoxRef.current.scrollTop -= containerRect.top - activeRect.top
    } else if (isActiveBottomOutside) {
      listBoxRef.current.scrollTop += activeRect.bottom - containerRect.bottom
    }
  }, [activeOption, listBoxRef, navigationType])

  useEnhancedEffect(() => {
    if (isExpanded) {
      // options の更新毎に座標を再計算する
      calculateRect()
    }
  }, [calculateRect, isExpanded, options])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      setNavigationType('key')

      if (e.key === 'Down' || e.key === 'ArrowDown') {
        e.stopPropagation()
        moveActivePositionDown()
      } else if (e.key === 'Up' || e.key === 'ArrowUp') {
        e.stopPropagation()
        moveActivePositionUp()
      } else if (e.key === 'Enter') {
        if (activeOption === null) {
          return
        }
        e.stopPropagation()
        if (activeOption.isNew) {
          onAdd && onAdd(activeOption.item.value)
        } else {
          onSelect(activeOption.item)
        }
      } else {
        setActiveOption(null)
      }
    },
    [activeOption, moveActivePositionDown, moveActivePositionUp, onAdd, onSelect, setActiveOption],
  )

  const { spacing } = useTheme()
  const { createPortal } = usePortal()
  const listBoxId = useId()
  const { items: partialOptions, renderIntersection } = usePartialRendering({
    items: options,
    minLength: useMemo(
      () => (activeOption === null ? 0 : options.indexOf(activeOption)) + 1,
      [activeOption, options],
    ),
  })

  const handleAdd = useCallback(
    (option: ComboBoxOption<T>) => {
      // HINT: Dropdown系コンポーネント内でComboBoxを使うと、選択肢がportalで表現されている関係上Dropdownが閉じてしまう
      // requestAnimationFrameを追加、処理を遅延させることで正常に閉じる/閉じないの判定を行えるようにする
      requestAnimationFrame(() => {
        onAdd && onAdd(option.item.value)
      })
    },
    [onAdd],
  )
  const handleSelect = useCallback(
    (option: ComboBoxOption<T>) => {
      onSelect(option.item)
    },
    [onSelect],
  )
  const handleHoverOption = useCallback(
    (option: ComboBoxOption<T>) => {
      setNavigationType('pointer')
      setActiveOption(option)
    },
    [setActiveOption],
  )

  const { wrapper, dropdownList, helpMessage, loaderWrapper, noItems } = listbox()
  const {
    wrapperStyleProps,
    dropdownListStyleProps,
    helpMessageStyle,
    loaderWrapperStyle,
    noItemsStyle,
  } = useMemo(() => {
    const { top, left, $width, height } = listBoxRect
    const dropdownListWidth = dropdownWidth || $width
    return {
      wrapperStyleProps: {
        className: wrapper(),
        style: {
          top: `${top}px`,
          left: `${left}px`,
          width: `${$width}px`,
        },
      },
      dropdownListStyleProps: {
        className: dropdownList(),
        style: {
          width:
            typeof dropdownListWidth === 'string' ? dropdownListWidth : `${dropdownListWidth}px`,
          maxWidth: `calc(100vw - ${left}px - ${spacing[0.5]})`,
          height: height ? `${height}px` : undefined,
        },
      },
      helpMessageStyle: helpMessage(),
      loaderWrapperStyle: loaderWrapper(),
      noItemsStyle: noItems(),
    }
  }, [
    dropdownList,
    dropdownWidth,
    helpMessage,
    listBoxRect,
    loaderWrapper,
    noItems,
    spacing,
    wrapper,
  ])

  const renderListBox = useCallback(
    () =>
      createPortal(
        <div {...wrapperStyleProps}>
          <div
            {...dropdownListStyleProps}
            id={listBoxId}
            ref={listBoxRef}
            role="listbox"
            aria-hidden={!isExpanded}
          >
            {dropdownHelpMessage && (
              <p className={helpMessageStyle}>
                <FaInfoCircleIcon color="TEXT_GREY" text={dropdownHelpMessage} iconGap={0.25} />
              </p>
            )}
            {!isExpanded ? null : isLoading ? (
              <div className={loaderWrapperStyle}>
                <Loader />
              </div>
            ) : options.length === 0 ? (
              <p role="alert" aria-live="polite" className={noItemsStyle}>
                {decorators?.noResultText
                  ? decorators.noResultText(NO_RESULT_TEXT)
                  : NO_RESULT_TEXT}
              </p>
            ) : (
              partialOptions.map((option) => (
                <ListBoxItemButton
                  key={option.id}
                  option={option}
                  isActive={option.id === activeOption?.id}
                  onAdd={handleAdd}
                  onSelect={handleSelect}
                  onMouseOver={handleHoverOption}
                  activeRef={activeRef}
                />
              ))
            )}
            {renderIntersection()}
          </div>
        </div>,
      ),
    [
      createPortal,
      wrapperStyleProps,
      dropdownListStyleProps,
      listBoxId,
      isExpanded,
      dropdownHelpMessage,
      helpMessageStyle,
      isLoading,
      loaderWrapperStyle,
      options.length,
      noItemsStyle,
      decorators,
      partialOptions,
      renderIntersection,
      activeOption?.id,
      handleAdd,
      handleSelect,
      handleHoverOption,
    ],
  )

  return {
    renderListBox,
    activeOption,
    handleKeyDown,
    listBoxId,
    listBoxRef,
  }
}
