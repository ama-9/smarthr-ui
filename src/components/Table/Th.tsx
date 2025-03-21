import React, {
  AriaAttributes,
  ComponentPropsWithoutRef,
  FC,
  PropsWithChildren,
  ReactNode,
  useMemo,
} from 'react'
import { tv } from 'tailwind-variants'

import { FaSortDownIcon, FaSortUpIcon } from '../Icon'
import { VisuallyHiddenText } from '../VisuallyHiddenText'

import { reelShadowStyle } from './useReelShadow'

type sortTypes = keyof typeof SORT_DIRECTION_LABEL
export type Props = PropsWithChildren<{
  /** 並び替え状態 */
  sort?: sortTypes
  /** 並び替えをクリックした時に発火するコールバック関数 */
  onSort?: () => void
  /** 文言を変更するための関数 */
  decorators?: {
    sortDirectionIconAlt: (text: string, { sort }: { sort: sortTypes }) => ReactNode
  }
  /** `true` のとき、TableReel内で固定表示になる */
  fixed?: boolean
}>
type ElementProps = Omit<ComponentPropsWithoutRef<'th'>, keyof Props | 'onClick'>

const SORT_DIRECTION_LABEL = {
  asc: '昇順',
  desc: '降順',
  none: '並び替えなし',
}

const thWrapper = tv({
  base: [
    'smarthr-ui-Th',
    'shr-text-sm',
    'shr-font-bold',
    'shr-py-0.75',
    'shr-px-1',
    'shr-text-left',
    'shr-text-black',
    'shr-leading-tight',
    'shr-align-middle',
    'aria-[sort]:shr-cursor-pointer',
    'hover:aria-[sort]:shr-bg-head-darken',
    '[&:has(:focus-visible)]:aria-[sort]:shr-focus-indicator',
    '[&[aria-sort=none]_.smarthr-ui-Icon]:forced-colors:shr-fill-[GrayText]',
    '[&[aria-sort=ascending]_.smarthr-ui-Icon:first-of-type]:forced-colors:shr-fill-[CanvasText]',
    '[&[aria-sort=ascending]_.smarthr-ui-Icon:last-of-type]:forced-colors:shr-fill-[GrayText]',
    '[&[aria-sort=descending]_.smarthr-ui-Icon:first-of-type]:forced-colors:shr-fill-[GrayText]',
    '[&[aria-sort=descending]_.smarthr-ui-Icon:last-of-type]:forced-colors:shr-fill-[CanvasText]',
  ],
  variants: {
    fixed: {
      true: [
        /* これ以降の記述はTableReel内で'fixed'を利用した際に追従させるために必要 */
        'fixedElement',
        '[&.fixed]:shr-sticky',
        '[&.fixed]:shr-right-0',
        '[&.fixed]:after:shr-opacity-100',
      ],
    },
  },
})

export const Th: FC<Props & ElementProps> = ({
  children,
  sort,
  onSort,
  decorators,
  fixed = false,
  className,
  ...props
}) => {
  const styles = useMemo(() => {
    const thWrapperStyle = thWrapper({ className, fixed })
    const reelShadowStyles = fixed ? reelShadowStyle({ showShadow: false, direction: 'right' }) : ''
    return `${thWrapperStyle} ${reelShadowStyles}`.trim()
  }, [className, fixed])

  const sortLabel = useMemo(
    () =>
      sort &&
      (decorators?.sortDirectionIconAlt?.(SORT_DIRECTION_LABEL[sort], { sort }) ||
        SORT_DIRECTION_LABEL[sort]),
    [decorators, sort],
  )
  const ariaSortProps = useMemo<
    | {
        'aria-sort': AriaAttributes['aria-sort']
      }
    | undefined
  >(
    () =>
      sort && {
        'aria-sort': sort === 'none' ? 'none' : `${sort}ending`,
      },
    [sort],
  )

  return (
    <th {...ariaSortProps} {...props} className={styles}>
      {sort ? (
        <SortButton onClick={onSort}>
          {children}
          <SortIcon sort={sort} />
          <VisuallyHiddenText>{sortLabel}</VisuallyHiddenText>
        </SortButton>
      ) : (
        children
      )}
    </th>
  )
}

const sortButton = tv({
  base: [
    'shr-cursor-pointer',
    'shr-box-content',
    'shr-inline-flex',
    'shr-items-center',
    'shr-gap-x-0.5',
    'shr-justify-between',
    '-shr-mx-1',
    '-shr-my-0.75',
    'shr-border-[unset]',
    'shr-outline-[unset]',
    'shr-bg-[unset]',
    'shr-py-0.75',
    'shr-px-1',
    'shr-w-full',
    'shr-font-inherit',
    'shr-text-inherit',
    'shr-leading-inherit',
    '[font-weight:inherit]',
  ],
})

const SortButton: FC<ComponentPropsWithoutRef<'button'>> = ({ className, ...props }) => {
  const sortButtonStyle = useMemo(() => sortButton({ className }), [className])
  return <button {...props} className={sortButtonStyle} />
}

const sortIcon = tv({
  slots: {
    wrapper: ['shr-inline-flex', 'shr-flex-col'],
    upIcon: ['shr-text-base'],
    downIcon: ['shr-text-base', '-shr-mt-em'],
  },
  variants: {
    sort: {
      asc: {
        upIcon: ['shr-text-black'],
        downIcon: ['shr-text-disabled'],
      },
      desc: {
        upIcon: ['shr-text-disabled'],
        downIcon: ['shr-text-black'],
      },
      none: {
        upIcon: ['shr-text-disabled'],
        downIcon: ['shr-text-disabled'],
      },
    },
  },
})

const SortIcon: FC<Pick<Props, 'sort'>> = ({ sort }) => {
  const { wrapperStyle, upIconStyle, downIconStyle } = useMemo(() => {
    const sortIconStyle = sortIcon()
    return {
      wrapperStyle: sortIconStyle.wrapper(),
      upIconStyle: sortIconStyle.upIcon({ sort }),
      downIconStyle: sortIconStyle.downIcon({ sort }),
    }
  }, [sort])

  return (
    <span className={wrapperStyle}>
      <FaSortUpIcon className={upIconStyle} />
      <FaSortDownIcon className={downIconStyle} />
    </span>
  )
}
