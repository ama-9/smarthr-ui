# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [43.1.0](https://github.com/kufu/smarthr-ui/compare/v43.0.0...v43.1.0) (2024-03-05)


### Features

* MultiComboBox のアイテムが選択されたときに選択済みかどうかを判定するコールバック関数をオプションで渡せるようにする ([#4346](https://github.com/kufu/smarthr-ui/issues/4346)) ([f734a79](https://github.com/kufu/smarthr-ui/commit/f734a790bc03101749b6d808a07b1ceccf1b3974))
* アイコンを Font Awesome 6 へ更新 ([#4291](https://github.com/kufu/smarthr-ui/issues/4291)) ([a50f322](https://github.com/kufu/smarthr-ui/commit/a50f322c2c87cadcc43413d97fcb5c7a89818d1f))


### Bug Fixes

* Combobox関係のbuttonのtype属性がsubmitになっているものがあるため対応する ([#4372](https://github.com/kufu/smarthr-ui/issues/4372)) ([420cbae](https://github.com/kufu/smarthr-ui/commit/420cbae3857b78ea200c804aac84aeacf560caf8))
* Fieldset で innerMargin が作用しない不具合を修正 ([#4374](https://github.com/kufu/smarthr-ui/issues/4374)) ([3e7a776](https://github.com/kufu/smarthr-ui/commit/3e7a7760c5d28b66cab6650b8e4810119876e886))
* fix typo in NotificationBar component ([#4377](https://github.com/kufu/smarthr-ui/issues/4377)) ([ca1fba2](https://github.com/kufu/smarthr-ui/commit/ca1fba256bf6c3f6a28a3ddb3fb3a86f41a28f07))
* Loader の CSS アニメーションを修正 ([#4381](https://github.com/kufu/smarthr-ui/issues/4381)) ([533b151](https://github.com/kufu/smarthr-ui/commit/533b151f15fe4c3854a9cf16885591b7e8002779))
* style属性を無意味に指定されるため、widthのデフォルト値である"auto"を削除する ([#4385](https://github.com/kufu/smarthr-ui/issues/4385)) ([04819d0](https://github.com/kufu/smarthr-ui/commit/04819d05c7f6a39608bcc62c5f9bdb9a0fec1507))

## [43.0.0](https://github.com/kufu/smarthr-ui/compare/v42.0.0...v43.0.0) (2024-02-28)


### ⚠ BREAKING CHANGES

* BackgroundJobsPanel を削除 (#4359)

### Features

* Icon に FaPaintBrush を追加 ([#4345](https://github.com/kufu/smarthr-ui/issues/4345)) ([744a012](https://github.com/kufu/smarthr-ui/commit/744a012ba102dd85d71d0780f972bd29f351ca31))


### Bug Fixes

* FormControl コンポーネントの props が DOM に表出しないようにする ([#4344](https://github.com/kufu/smarthr-ui/issues/4344)) ([0626715](https://github.com/kufu/smarthr-ui/commit/062671517fa467cac12bb330fa5c3dda57eb0b0c))
* HeaderLink に className を渡せるように修正 ([715c315](https://github.com/kufu/smarthr-ui/commit/715c315c34667d74fceb4bbe13e219125429bee2))
* HeaderLink に className を渡せるように修正 ([#4358](https://github.com/kufu/smarthr-ui/issues/4358)) ([a016836](https://github.com/kufu/smarthr-ui/commit/a016836043d25e805b9361f3c7f1fd7c76331bde))
* Paginationコンポーネントの番号ボタンに不必要なlist-styleが表示されてしまう問題を修正 ([#4349](https://github.com/kufu/smarthr-ui/issues/4349)) ([f82ba44](https://github.com/kufu/smarthr-ui/commit/f82ba44005ef8e58d9db2dfc514903f476cdc093))
* TabItem の余白を調整 ([#4364](https://github.com/kufu/smarthr-ui/issues/4364)) ([08a7651](https://github.com/kufu/smarthr-ui/commit/08a7651d1ee6e5574d2f2a8b04ca76cf5c8a780f))
* Textareaでwidthを指定しない場合、style属性で"width=auto;"が指定されないようにする ([#4350](https://github.com/kufu/smarthr-ui/issues/4350)) ([6039bf3](https://github.com/kufu/smarthr-ui/commit/6039bf3713e3ce0ca85cc6b72ad3719fc59aac58))
* 強制カラーモードの時、borderのスタイルが適用されるようにした ([#4365](https://github.com/kufu/smarthr-ui/issues/4365)) ([5c74edc](https://github.com/kufu/smarthr-ui/commit/5c74edc0b60cc812e108d25038f12fd1859a559c))


* BackgroundJobsPanel を削除 ([#4359](https://github.com/kufu/smarthr-ui/issues/4359)) ([b9a0b64](https://github.com/kufu/smarthr-ui/commit/b9a0b64ddbd3289bbbeae1d414622506326fa28e))

## [42.0.0](https://github.com/kufu/smarthr-ui/compare/v41.3.0...v42.0.0) (2024-02-20)


### ⚠ BREAKING CHANGES

* RightFixedNote と DialogBase を削除 (#4318)

### Bug Fixes

* DOM に themes="[object Object]" がつかないように修正 ([#4293](https://github.com/kufu/smarthr-ui/issues/4293)) ([76df903](https://github.com/kufu/smarthr-ui/commit/76df90367b25bfe74486203537a6b442231f9cc8))
* PageCounterの-がスクリーンリーダーで読み上げられない問題を修正 ([#4297](https://github.com/kufu/smarthr-ui/issues/4297)) ([a4e4ed6](https://github.com/kufu/smarthr-ui/commit/a4e4ed631b434c55d161120361e6ecf25f7c8dee))
* TableReel内の要素のサイズが動的に変化したときにもfixedの計算をするようにした ([#4316](https://github.com/kufu/smarthr-ui/issues/4316)) ([0b0b6de](https://github.com/kufu/smarthr-ui/commit/0b0b6ded515fa76c10e0c194f6b83b382807fbec))


* RightFixedNote と DialogBase を削除 ([#4318](https://github.com/kufu/smarthr-ui/issues/4318)) ([d3e4ab3](https://github.com/kufu/smarthr-ui/commit/d3e4ab395935af5317c8a41b776812a74a5c391d))

## [41.3.0](https://github.com/kufu/smarthr-ui/compare/v41.2.0...v41.3.0) (2024-02-14)


### Features

* preset に border の簡略表記を追加し、overflow の初期化を削除 ([#4298](https://github.com/kufu/smarthr-ui/issues/4298)) ([3b59865](https://github.com/kufu/smarthr-ui/commit/3b598657ee91b9ab8edce7660b1777f041b125d5))
* RightFixedNoteにloadingとsubmittingの状態を追加 ([#4306](https://github.com/kufu/smarthr-ui/issues/4306)) ([4fff8eb](https://github.com/kufu/smarthr-ui/commit/4fff8ebfbfa23137529e0a61db60549301932d19))


### Bug Fixes

* broken character in ComboBox story ([#4309](https://github.com/kufu/smarthr-ui/issues/4309)) ([72e8516](https://github.com/kufu/smarthr-ui/commit/72e8516dfbac116d5cc5ddef1f23fd16e9409a38))
* FilterDropdown[disabled] 時のアイコン色を修正 ([#4299](https://github.com/kufu/smarthr-ui/issues/4299)) ([758c1db](https://github.com/kufu/smarthr-ui/commit/758c1db81d8fa29bfc43a064c5dacba410287d8a))
* FormControl, Fieldset の errorMessages に空配列が渡された場合、不必要な要素をレンダリングしないように修正 ([#4288](https://github.com/kufu/smarthr-ui/issues/4288)) ([79ff6ab](https://github.com/kufu/smarthr-ui/commit/79ff6abbc974bf952ef77581e0d5e8c9b327263d))
* ハイコントラストモード時、AppNaviのAnchorに下線を表示する ([#4292](https://github.com/kufu/smarthr-ui/issues/4292)) ([25c984c](https://github.com/kufu/smarthr-ui/commit/25c984c1ec25e00cd4cad704fa6c6432313143ad))

## [41.2.0](https://github.com/kufu/smarthr-ui/compare/v41.1.2...v41.2.0) (2024-02-06)


### Features

* Fieldset のタイトルを視覚的に隠す dangerouslyTitleHidden を追加 ([#4253](https://github.com/kufu/smarthr-ui/issues/4253)) ([98dc367](https://github.com/kufu/smarthr-ui/commit/98dc367812fc2a136525dd4c708b936679f4790d))
* loaderの色をmainに変更。差異がなくなるのでprefres-contrast: moreでの指定は削除。 ([#4251](https://github.com/kufu/smarthr-ui/issues/4251)) ([77a6a6d](https://github.com/kufu/smarthr-ui/commit/77a6a6d97766c4f60cce85d0258408940f82e042))
* SelectのValueに英字などが来た場合、ディセンダー部分が見切れるのを修正 ([#4261](https://github.com/kufu/smarthr-ui/issues/4261)) ([dccb116](https://github.com/kufu/smarthr-ui/commit/dccb1165ccfe3bc462a486bfe7cca70f12ea0618))


### Bug Fixes

* AccordionPanel の max-height に余計なスタイルがあたっていたため削除 ([#4250](https://github.com/kufu/smarthr-ui/issues/4250)) ([de478c9](https://github.com/kufu/smarthr-ui/commit/de478c96df474721879d84a2a24b787863d6d496))

### [41.1.2](https://github.com/kufu/smarthr-ui/compare/v41.1.1...v41.1.2) (2024-01-29)


### Bug Fixes

* RadioButtonPanel を Tailwind CSS 化 ([#4213](https://github.com/kufu/smarthr-ui/issues/4213)) ([2d5c985](https://github.com/kufu/smarthr-ui/commit/2d5c98559bffc17ee14f0e26136a6a4fc1485a9d))

### [41.1.1](https://github.com/kufu/smarthr-ui/compare/v41.1.0...v41.1.1) (2024-01-26)


### Bug Fixes

* border-box削除によるデグレの修正 ([#4232](https://github.com/kufu/smarthr-ui/issues/4232)) ([711c5b0](https://github.com/kufu/smarthr-ui/commit/711c5b026ba07d601f5c6d3646e512dafba99e4e))

## [41.1.0](https://github.com/kufu/smarthr-ui/compare/v41.0.0...v41.1.0) (2024-01-23)


### Features

* Combobox のスタイリングを見直し ([#4196](https://github.com/kufu/smarthr-ui/issues/4196)) ([d3a9a92](https://github.com/kufu/smarthr-ui/commit/d3a9a92f026d97263e2f0ef25e85c90dbfc33d5a))


### Bug Fixes

* typo in error type description ([#4193](https://github.com/kufu/smarthr-ui/issues/4193)) ([71520a4](https://github.com/kufu/smarthr-ui/commit/71520a44fed06c91d139401a596279b2d1bc9dc6))

## [41.0.0](https://github.com/kufu/smarthr-ui/compare/v40.1.3...v41.0.0) (2024-01-16)


### ⚠ BREAKING CHANGES

* Revert "Revert"RadioButtonをTailwindCSS化"" (#4136)

### Features

* Layout コンポーネントに SectioningFragment の自動挿入機構を作る ([#4070](https://github.com/kufu/smarthr-ui/issues/4070)) ([6d5b0d3](https://github.com/kufu/smarthr-ui/commit/6d5b0d336e12cdeaa01f2b4b803aa685fef707b1))
* RightFixedNoteのeditボタンの表示/非表示を切り替えられるようにする ([#4180](https://github.com/kufu/smarthr-ui/issues/4180)) ([64899e5](https://github.com/kufu/smarthr-ui/commit/64899e5ed5cbc54f4209a68440a53e153ca55c3c))


### Bug Fixes

* AccordionPanelTrigger 内の見出しテキストで折り返しが発生する際に、アイコンとの間に改行が発生しないようにする ([#4151](https://github.com/kufu/smarthr-ui/issues/4151)) ([383e2b7](https://github.com/kufu/smarthr-ui/commit/383e2b7c409ec24aace7503980084ec8cbc94dc4))
* Input[readOnly] の背景を正しい装飾に修正 ([#4181](https://github.com/kufu/smarthr-ui/issues/4181)) ([5435eaa](https://github.com/kufu/smarthr-ui/commit/5435eaa465eeadd998dbdb3f40557ea3b57dbef7))
* ModelessDialog ヘッダを hover した時の装飾を修正 ([#4168](https://github.com/kufu/smarthr-ui/issues/4168)) ([d7301bf](https://github.com/kufu/smarthr-ui/commit/d7301bf261846a658609d3a9d11cf11c7e65aa08))
* Revert "Revert"RadioButtonをTailwindCSS化"" ([#4136](https://github.com/kufu/smarthr-ui/issues/4136)) ([f0cc6cb](https://github.com/kufu/smarthr-ui/commit/f0cc6cb456cde5045934bceee24e2e20da35fe29)), closes [#4122](https://github.com/kufu/smarthr-ui/issues/4122) [#4122](https://github.com/kufu/smarthr-ui/issues/4122) [#4135](https://github.com/kufu/smarthr-ui/issues/4135) [#4122](https://github.com/kufu/smarthr-ui/issues/4122) [#4135](https://github.com/kufu/smarthr-ui/issues/4135)
* size="s" の Button でも、アイコンとテキストコンテントの縦位置が揃うようにする ([#4182](https://github.com/kufu/smarthr-ui/issues/4182)) ([22dbcb5](https://github.com/kufu/smarthr-ui/commit/22dbcb501c9042b66a30fc072c57f63a51f6b501))

### [40.1.3](https://github.com/kufu/smarthr-ui/compare/v40.1.2...v40.1.3) (2023-12-26)


### Bug Fixes

* DatePicker の inputSuffixWrapper の border が reset css に依存していたので修正 ([#4143](https://github.com/kufu/smarthr-ui/issues/4143)) ([36b36b5](https://github.com/kufu/smarthr-ui/commit/36b36b502f3f9940715cd57f00d2205a858a4ea9))
* 強制カラーモード時、TextLinkにunderlineを表示する ([#4144](https://github.com/kufu/smarthr-ui/issues/4144)) ([fcf2190](https://github.com/kufu/smarthr-ui/commit/fcf219036c97a7e014f0600a7d8cc5559cb4c59e))

### [40.1.2](https://github.com/kufu/smarthr-ui/compare/v40.1.1...v40.1.2) (2023-12-22)


### Bug Fixes

* InputとStatusLabelコンポーネントに白背景を追加 ([#4138](https://github.com/kufu/smarthr-ui/issues/4138)) ([adc78fe](https://github.com/kufu/smarthr-ui/commit/adc78feb5e35c363c94ab14776c5c310944f28d4))

### [40.1.1](https://github.com/kufu/smarthr-ui/compare/v40.1.0...v40.1.1) (2023-12-20)


### Bug Fixes

* form内にcomboboxが存在する場合、アイテムの選択をEnterキーで行うとformがsubmitされてしまう問題に対応する ([#4127](https://github.com/kufu/smarthr-ui/issues/4127)) ([64ba364](https://github.com/kufu/smarthr-ui/commit/64ba3647928ab6439cbcf6bc323b9d70cb940bf4))
* Heading のスタイリングが reset css に依存していたので修正 ([#4118](https://github.com/kufu/smarthr-ui/issues/4118)) ([c6487c0](https://github.com/kufu/smarthr-ui/commit/c6487c0a8e13574d9535ea300c33bd40a32e9a00))
* MultiComboBoxでアイテムを選択済みであるにも関わらず、requiredがhtml validationに引っかかってしまう問題を修正する ([#4115](https://github.com/kufu/smarthr-ui/issues/4115)) ([b4c2603](https://github.com/kufu/smarthr-ui/commit/b4c26035761f944d9c1b702fab000b1c0efe8ba5))
* RadioButtonPanel の装飾を見直し ([#4121](https://github.com/kufu/smarthr-ui/issues/4121)) ([d73b281](https://github.com/kufu/smarthr-ui/commit/d73b2813455c549a8c375eca6281ce7395a0be26))

## [40.1.0](https://github.com/kufu/smarthr-ui/compare/v40.0.2...v40.1.0) (2023-12-13)


### Features

* Chip コンポーネントを追加する ([#4101](https://github.com/kufu/smarthr-ui/issues/4101)) ([31d4a51](https://github.com/kufu/smarthr-ui/commit/31d4a5177f30c7dd1353332138e6af9ee717528b))


### Bug Fixes

* ButtonWrapper の prefix 付与漏れを修正 ([#4109](https://github.com/kufu/smarthr-ui/issues/4109)) ([08c5429](https://github.com/kufu/smarthr-ui/commit/08c5429e11b74b4709576a8a1a624afde02403e6))
* top 以外の三辺に border が当たらないように修正 ([#4108](https://github.com/kufu/smarthr-ui/issues/4108)) ([6d62867](https://github.com/kufu/smarthr-ui/commit/6d628674a9d6ebc1d7e5d04827e47949bb84a48c))
* typo Stack.stories.tsx ([#4102](https://github.com/kufu/smarthr-ui/issues/4102)) ([e5d622b](https://github.com/kufu/smarthr-ui/commit/e5d622b571ccfc32a7bc6ecb6abf4a49d0eea330))

### [40.0.2](https://github.com/kufu/smarthr-ui/compare/v40.0.1...v40.0.2) (2023-12-06)


### Bug Fixes

* Stack の詳細度が高すぎる欠陥を修正 ([#4093](https://github.com/kufu/smarthr-ui/issues/4093)) ([17e1b75](https://github.com/kufu/smarthr-ui/commit/17e1b759dc010df4c81be0054fd54d1e65afcf1d))

### [40.0.1](https://github.com/kufu/smarthr-ui/compare/v40.0.0...v40.0.1) (2023-12-06)


### Bug Fixes

* Layout コンポーネントに ref を渡せない不具合を修正 ([#4090](https://github.com/kufu/smarthr-ui/issues/4090)) ([8c54720](https://github.com/kufu/smarthr-ui/commit/8c547207706a8d0e98d807646af1d31759081bbe))

## [40.0.0](https://github.com/kufu/smarthr-ui/compare/v39.1.0...v40.0.0) (2023-12-05)


### ⚠ BREAKING CHANGES

* Stack の props を見直し、Tailwind CSS 化 (#4054)

### Features

* robotアイコンを追加 ([#4058](https://github.com/kufu/smarthr-ui/issues/4058)) ([2b34306](https://github.com/kufu/smarthr-ui/commit/2b34306e38d17e4dcf7de47daaa50dd0bf621907))


### Bug Fixes

* FormDialogのsubmit時、portal等で擬似的にネストしている親formをsubmitしてしまうためstopPropagationを追加する ([#4053](https://github.com/kufu/smarthr-ui/issues/4053)) ([ee51eaa](https://github.com/kufu/smarthr-ui/commit/ee51eaaf3166432795cf0340691d91c9c4fb9dd9))


* Stack の props を見直し、Tailwind CSS 化 ([#4054](https://github.com/kufu/smarthr-ui/issues/4054)) ([d6b1866](https://github.com/kufu/smarthr-ui/commit/d6b186623c639e6d5228cf8bfb53e656df178b69))

## [39.1.0](https://github.com/kufu/smarthr-ui/compare/v39.0.0...v39.1.0) (2023-11-28)


### Features

* BaseColumn の背景色に WHITE を追加 ([#4034](https://github.com/kufu/smarthr-ui/issues/4034)) ([0089888](https://github.com/kufu/smarthr-ui/commit/0089888502845b8f9173e61fff0d070e7639a100))


### Bug Fixes

* forwardRef によって壊れていた型情報を直した ([#4038](https://github.com/kufu/smarthr-ui/issues/4038)) ([6c4f144](https://github.com/kufu/smarthr-ui/commit/6c4f144d5287655f2166105dec7f639250c5e653))
* テキスト付き Icon における左右位置の実装を揃える ([#4009](https://github.com/kufu/smarthr-ui/issues/4009)) ([ba86b21](https://github.com/kufu/smarthr-ui/commit/ba86b217aea9948f42f2881b714fef9b3cb29c0e))

## [39.0.0](https://github.com/kufu/smarthr-ui/compare/v38.2.0...v39.0.0) (2023-11-22)


### ⚠ BREAKING CHANGES

* Checkbox から lineHeight を削除し、Tailwind CSS 化 (#3981)

### Features

* add new icons ([#4020](https://github.com/kufu/smarthr-ui/issues/4020)) ([f0407e8](https://github.com/kufu/smarthr-ui/commit/f0407e8098abe0f9d6936d90f8ff51baf855efaf))
* CheckBox と RadioButton の disabled 色を見直す ([#4023](https://github.com/kufu/smarthr-ui/issues/4023)) ([5687507](https://github.com/kufu/smarthr-ui/commit/56875070bd5d61b19393a3046d909833cf2db611))


### Bug Fixes

* Center に className が渡っていなかったため styled-components が使えていなかった欠陥を修正 ([#4031](https://github.com/kufu/smarthr-ui/issues/4031)) ([f0a5d79](https://github.com/kufu/smarthr-ui/commit/f0a5d79292f6646f5193f1bc206a3b8b84b1f0b9))
* DatePicker の VRT 用 story の日付を固定 ([#3986](https://github.com/kufu/smarthr-ui/issues/3986)) ([c1ec321](https://github.com/kufu/smarthr-ui/commit/c1ec3212a59e595500b860ca3158e8f38a0eaa48))
* FormGroupのGroupLabelTextでforwardedAsを使うように修正 ([#4029](https://github.com/kufu/smarthr-ui/issues/4029)) ([5852986](https://github.com/kufu/smarthr-ui/commit/585298687620a55c737b1b3fdfc96b499aec3bfa))
* props が DOM element に渡ってしまって warning になっている箇所を修正 ([#4030](https://github.com/kufu/smarthr-ui/issues/4030)) ([a0e9d41](https://github.com/kufu/smarthr-ui/commit/a0e9d4151ccab2d88d2cfebaf45cf71c8c879206))
* SmartHR UIのinput関連のコンポーネントがStyled-Componentでラップされている際にFormControlを使用してもラベルのid等が紐づかない問題を修正 ([#4001](https://github.com/kufu/smarthr-ui/issues/4001)) ([5641acb](https://github.com/kufu/smarthr-ui/commit/5641acbc872315ca97888edcff225d879a22f65b))
* 強制カラーモードの時、チェックマークが二重で表示されていたのでブラウザ標準UIのみを表示するようにした ([#3996](https://github.com/kufu/smarthr-ui/issues/3996)) ([f76954b](https://github.com/kufu/smarthr-ui/commit/f76954b994acfaa5c65acc591667a65e4ab49197))
* 画面幅が狭い時の NotificationBar の見た目を調整 ([#3967](https://github.com/kufu/smarthr-ui/issues/3967)) ([c99507c](https://github.com/kufu/smarthr-ui/commit/c99507cf85ea8056b577e813833b22b67ed30a24))


* Checkbox から lineHeight を削除し、Tailwind CSS 化 ([#3981](https://github.com/kufu/smarthr-ui/issues/3981)) ([e382f35](https://github.com/kufu/smarthr-ui/commit/e382f358f0d7e0eaa89d8251044c2aeb67c1e905))

## [38.2.0](https://github.com/kufu/smarthr-ui/compare/v38.1.0...v38.2.0) (2023-11-14)


### Features

* NotificationBar に下地の概念を追加 ([#3959](https://github.com/kufu/smarthr-ui/issues/3959)) ([2b50ae6](https://github.com/kufu/smarthr-ui/commit/2b50ae6cd01ab88985e27cd456f68b466c9e267a))

## [38.1.0](https://github.com/kufu/smarthr-ui/compare/v38.0.0...v38.1.0) (2023-11-07)


### Features

* PageCounterにdecoratorsを追加する ([#3923](https://github.com/kufu/smarthr-ui/issues/3923)) ([e4bd874](https://github.com/kufu/smarthr-ui/commit/e4bd874a07929dc3d5044cfaac3a352d4e10e43c))
* UnstyledButton を Tailwind CSS 化 ([#3919](https://github.com/kufu/smarthr-ui/issues/3919)) ([e417975](https://github.com/kufu/smarthr-ui/commit/e41797532a508050fb094fb196c9cf4b15fb3932))


### Bug Fixes

* Dialog の背景を押した時の挙動をデフォルトで閉じないように揃える ([#3921](https://github.com/kufu/smarthr-ui/issues/3921)) ([a294c97](https://github.com/kufu/smarthr-ui/commit/a294c97421a34dc91904ecab0235b2ec11259cfa))
* tailwind-variants の修正を取り込み Button に反映 ([#3918](https://github.com/kufu/smarthr-ui/issues/3918)) ([c238c49](https://github.com/kufu/smarthr-ui/commit/c238c4917f01730ba797f52c2317c7cf419b5f12))
* 強制カラーモード時に Icon の色が強制されない欠陥を修正 ([#3940](https://github.com/kufu/smarthr-ui/issues/3940)) ([8c78b63](https://github.com/kufu/smarthr-ui/commit/8c78b63fa9909d30e86e357ad7814820b868d029))

## [38.0.0](https://github.com/kufu/smarthr-ui/compare/v37.1.2...v38.0.0) (2023-10-31)


### ⚠ BREAKING CHANGES

* 旧 Button コンポーネントを削除 (#3911)

### Features

* Button を Tailwind CSS 化 ([#3899](https://github.com/kufu/smarthr-ui/issues/3899)) ([3e28784](https://github.com/kufu/smarthr-ui/commit/3e287847624f0f2d121e256ae966a1e62639ee8d))
* Cluster を Tailwind CSS 化 ([#3892](https://github.com/kufu/smarthr-ui/issues/3892)) ([0b9757f](https://github.com/kufu/smarthr-ui/commit/0b9757f74fa9f6d567bfe8eef7da063e2d6a5415))
* ComboBoxにrefを渡せるようにする ([#3903](https://github.com/kufu/smarthr-ui/issues/3903)) ([49fb344](https://github.com/kufu/smarthr-ui/commit/49fb344f1d34049fd873cbde06f7b0e1cda2b298))
* PageCounterをTailwindCSS化 ([#3910](https://github.com/kufu/smarthr-ui/issues/3910)) ([f3c6440](https://github.com/kufu/smarthr-ui/commit/f3c6440ccaf9c3ab1d9eddb986526df0eadaa872))


### Bug Fixes

* Headingコンポーネントのtag属性にspan, legendを指定不可能にする ([#3908](https://github.com/kufu/smarthr-ui/issues/3908)) ([9885058](https://github.com/kufu/smarthr-ui/commit/98850581413848c497d828fa6d4b3e1c3634fb54))
* 旧 Button コンポーネントを削除 ([#3911](https://github.com/kufu/smarthr-ui/issues/3911)) ([bde7e9e](https://github.com/kufu/smarthr-ui/commit/bde7e9ece6cce2086c2087d380fc09652424b805))

### [37.1.2](https://github.com/kufu/smarthr-ui/compare/v37.1.1...v37.1.2) (2023-10-24)


### Bug Fixes

* smarthr-ui-preset.ts を src ディレクトリ内に移動 ([#3873](https://github.com/kufu/smarthr-ui/issues/3873)) ([c5cfe06](https://github.com/kufu/smarthr-ui/commit/c5cfe06e1f9c71ef5045db7691abf9f37e81e71a))

### [37.1.1](https://github.com/kufu/smarthr-ui/compare/v37.1.0...v37.1.1) (2023-10-24)

## [37.1.0](https://github.com/kufu/smarthr-ui/compare/v37.0.2...v37.1.0) (2023-10-23)


### Features

* Dropdown を Tailwind CSS 化 ([#3833](https://github.com/kufu/smarthr-ui/issues/3833)) ([9b2ce2f](https://github.com/kufu/smarthr-ui/commit/9b2ce2f57c6e8e88803a088482a8090b1b36b658))
* tailwindcss 環境向けの ThemeProvider を追加 ([#3868](https://github.com/kufu/smarthr-ui/issues/3868)) ([5a6e70e](https://github.com/kufu/smarthr-ui/commit/5a6e70e7905226a375fc16b41158e60b59efd0e4))
* TextLink を Tailwind CSS 化 ([#3844](https://github.com/kufu/smarthr-ui/issues/3844)) ([ed6b751](https://github.com/kufu/smarthr-ui/commit/ed6b751698e8676f742e79ac42036932a4fcc46c)), closes [#3848](https://github.com/kufu/smarthr-ui/issues/3848)

### [37.0.2](https://github.com/kufu/smarthr-ui/compare/v37.0.1...v37.0.2) (2023-10-18)

### [37.0.1](https://github.com/kufu/smarthr-ui/compare/v37.0.0...v37.0.1) (2023-10-17)


### Bug Fixes

* FormDialogのonSubmit時に画面が更新されてしまう場合があるため、FormEventをpreventDefaultする ([#3817](https://github.com/kufu/smarthr-ui/issues/3817)) ([6778257](https://github.com/kufu/smarthr-ui/commit/6778257f2d3f821d649bdb182288ead7a60da7ee))
* prettier v3 系に更新 ([#3827](https://github.com/kufu/smarthr-ui/issues/3827)) ([0c7c892](https://github.com/kufu/smarthr-ui/commit/0c7c8928247a34021108b4dc782effa1c1c4977e))
* Select の文字位置が Firefox でズレていたので修正 ([#3830](https://github.com/kufu/smarthr-ui/issues/3830)) ([781185c](https://github.com/kufu/smarthr-ui/commit/781185c12e7a68279598fc01806083c8cf2eb4cd))
* Switch の参照フォントサイズを theme に置き換え ([#3831](https://github.com/kufu/smarthr-ui/issues/3831)) ([338b70f](https://github.com/kufu/smarthr-ui/commit/338b70fc7d849551d571b02aab5a0793c540d034))

## [37.0.0](https://github.com/kufu/smarthr-ui/compare/v36.0.0...v37.0.0) (2023-10-10)


### ⚠ BREAKING CHANGES

* Tailwind CSS を導入し Text の Story を置き換え (#3616)

### Features

* Tailwind CSS を導入し Text の Story を置き換え ([#3616](https://github.com/kufu/smarthr-ui/issues/3616)) ([7c628a4](https://github.com/kufu/smarthr-ui/commit/7c628a4095f3e70219be5d826d5e75d25000d99b)), closes [#3699](https://github.com/kufu/smarthr-ui/issues/3699)


### Bug Fixes

* Text の color や leading などの属性を DOM から隠す ([#3797](https://github.com/kufu/smarthr-ui/issues/3797)) ([07c4109](https://github.com/kufu/smarthr-ui/commit/07c4109a2dc9c39c77f711fb27b803ca3791d762))

## [36.0.0](https://github.com/kufu/smarthr-ui/compare/v35.4.0...v36.0.0) (2023-10-03)


### ⚠ BREAKING CHANGES

* FieldSet非推奨コンポーネントのヒント、エラーメッセージの配置をFormControlと揃える (#3774)

### Features

* FieldSet非推奨コンポーネントのヒント、エラーメッセージの配置をFormControlと揃える ([#3774](https://github.com/kufu/smarthr-ui/issues/3774)) ([70efd6a](https://github.com/kufu/smarthr-ui/commit/70efd6a35ad0ccfae8d4717d0348484aaffac596))
* 矢印キーでDropdownMenuButton内アイテムの移動を出来るように修正 ([#3780](https://github.com/kufu/smarthr-ui/issues/3780)) ([cc412e2](https://github.com/kufu/smarthr-ui/commit/cc412e211b43b2349976e6221c40a6d65b6f279f))

## [35.4.0](https://github.com/kufu/smarthr-ui/compare/v35.3.0...v35.4.0) (2023-09-27)


### Features

* Switch を追加 ([#3719](https://github.com/kufu/smarthr-ui/issues/3719)) ([956311b](https://github.com/kufu/smarthr-ui/commit/956311b3effddcbdee6548ef29e785934505ec3b))

## [35.3.0](https://github.com/kufu/smarthr-ui/compare/v35.2.0...v35.3.0) (2023-09-19)


### Features

* FilterDropdown にサイズ小オプションを追加 ([#3717](https://github.com/kufu/smarthr-ui/issues/3717)) ([f4bab37](https://github.com/kufu/smarthr-ui/commit/f4bab372d5c6a75cdd6f5ab2b9a37a9c94c80aa4))
* InputFileのラベルが2回スクリーンリーダーで読まれないように ([#3714](https://github.com/kufu/smarthr-ui/issues/3714)) ([b43c0eb](https://github.com/kufu/smarthr-ui/commit/b43c0eb3241cb7b42ffbcd4494b15d24c5dc00e6))

## [35.2.0](https://github.com/kufu/smarthr-ui/compare/v35.1.1...v35.2.0) (2023-09-12)


### Features

* add forced-colors: acitve mode ([#3702](https://github.com/kufu/smarthr-ui/issues/3702)) ([36385a5](https://github.com/kufu/smarthr-ui/commit/36385a5efd50e79269a741a2790cd9a4669c37f1))


### Bug Fixes

* style属性に渡すプロパティのため、camel caseに変更する ([#3698](https://github.com/kufu/smarthr-ui/issues/3698)) ([e65e098](https://github.com/kufu/smarthr-ui/commit/e65e098b159877602358ddaa4d651bccc5b5c454))

### [35.1.1](https://github.com/kufu/smarthr-ui/compare/v35.1.0...v35.1.1) (2023-09-04)


### Bug Fixes

* Combobox系コンポーネント内で利用している"hidden", "disabled"などのclassを指定する方法から、style属性を変化させる方法に変更する ([#3667](https://github.com/kufu/smarthr-ui/issues/3667)) ([0b2c3e0](https://github.com/kufu/smarthr-ui/commit/0b2c3e06e61692109bb4b2c7254e448889a60fb0))

## [35.1.0](https://github.com/kufu/smarthr-ui/compare/v35.0.0...v35.1.0) (2023-08-29)


### Features

* add onFocus and onBlur to SingleComboBox ([#3653](https://github.com/kufu/smarthr-ui/issues/3653)) ([d1479b5](https://github.com/kufu/smarthr-ui/commit/d1479b5a33df4fe14e8c355916385793bc3e750b))


### Bug Fixes

* RemoteTriggerActionDialogに渡したonPressEscapeが正しく処理されるようにする ([#3605](https://github.com/kufu/smarthr-ui/issues/3605)) ([de3ff46](https://github.com/kufu/smarthr-ui/commit/de3ff46683dd6b97705b94880435fc12a058331a))

## [35.0.0](https://github.com/kufu/smarthr-ui/compare/v34.3.1...v35.0.0) (2023-08-08)


### ⚠ BREAKING CHANGES

* Headingのtypeのデフォルト値をsectionTitleに、PageHeadingのtypeのデフォルト値をscreenTitleにする (#3561)

### Features

* Badge を追加 ([#3558](https://github.com/kufu/smarthr-ui/issues/3558)) ([c2cd481](https://github.com/kufu/smarthr-ui/commit/c2cd481119c85b0eedbe236871cd34188f40c3c9))
* Headingのtypeのデフォルト値をsectionTitleに、PageHeadingのtypeのデフォルト値をscreenTitleにする ([#3561](https://github.com/kufu/smarthr-ui/issues/3561)) ([8cc5c6c](https://github.com/kufu/smarthr-ui/commit/8cc5c6cbde2b55a4aa9c4c2463c4ea448b32a6e8))
* SectioningContent系コンポーネントに対してrefを設定可能にする ([#3607](https://github.com/kufu/smarthr-ui/issues/3607)) ([5127c08](https://github.com/kufu/smarthr-ui/commit/5127c087c3550b50a88206941e0b5cfde9c56731))


### Bug Fixes

* TextLink から不要な hover スタイルを削除 ([#3613](https://github.com/kufu/smarthr-ui/issues/3613)) ([ffc6e15](https://github.com/kufu/smarthr-ui/commit/ffc6e15ed7182da5824c04414b8093f3a1153fe5))

### [34.3.1](https://github.com/kufu/smarthr-ui/compare/v34.3.0...v34.3.1) (2023-07-31)

## [34.3.0](https://github.com/kufu/smarthr-ui/compare/v34.2.1...v34.3.0) (2023-07-26)


### Features

* RemoteTrigger系Dialogに onToggle, onOpen, onCloseオプションを追加する ([#3565](https://github.com/kufu/smarthr-ui/issues/3565)) ([2549760](https://github.com/kufu/smarthr-ui/commit/25497609d6cf7a2025dd33e935302a138c95a6d6))


### Bug Fixes

* ResponseMessage から不要な props を削除 ([#3577](https://github.com/kufu/smarthr-ui/issues/3577)) ([f81a4d7](https://github.com/kufu/smarthr-ui/commit/f81a4d7170329f6098a618c2e1281010654ff7af))
* SpreadsheetTable に className を追加 ([#3576](https://github.com/kufu/smarthr-ui/issues/3576)) ([528be7d](https://github.com/kufu/smarthr-ui/commit/528be7d7284cd9daa3a1f1dd4402da36f50042f0))
* TabItemがselectedでない場合にもborderが表示されてしまう場合があるため、transparent指定ではなく、border有無を切り替えるstyleに変更 ([#3594](https://github.com/kufu/smarthr-ui/issues/3594)) ([0aaf457](https://github.com/kufu/smarthr-ui/commit/0aaf4579c696d421c3fb162cc295743aed6b7843))
* Tooltip コンポーネントが全画面モード中でも画面上に描画されるように修正 ([#3578](https://github.com/kufu/smarthr-ui/issues/3578)) ([4d952a0](https://github.com/kufu/smarthr-ui/commit/4d952a08b4f8ede6500627dcd404cb3a299fadf2))

### [34.2.1](https://github.com/kufu/smarthr-ui/compare/v34.2.0...v34.2.1) (2023-07-18)


### Bug Fixes

* PageHeadingのexportミスを修正 ([#3570](https://github.com/kufu/smarthr-ui/issues/3570)) ([1a37885](https://github.com/kufu/smarthr-ui/commit/1a3788500527d19bfc8708b7540c46e8381455e0))

## [34.2.0](https://github.com/kufu/smarthr-ui/compare/v34.1.0...v34.2.0) (2023-07-18)


### Features

* PageHeadingコンポーネントを追加 ([#3546](https://github.com/kufu/smarthr-ui/issues/3546)) ([691df20](https://github.com/kufu/smarthr-ui/commit/691df20871f56ecfdf612c56f26a60dddb73f869))


### Bug Fixes

* DropdownMenuButton内にdisabledなButtonコンポーネントを設置するとstyle崩れが発生する問題を修正 ([#3559](https://github.com/kufu/smarthr-ui/issues/3559)) ([e88120c](https://github.com/kufu/smarthr-ui/commit/e88120c2876146ab3e364332166961b1a3990562))

## [34.1.0](https://github.com/kufu/smarthr-ui/compare/v34.0.0...v34.1.0) (2023-07-11)


### Features

* HeadingにvisuallyHiddenオプションを追加する ([#3530](https://github.com/kufu/smarthr-ui/issues/3530)) ([6e63c81](https://github.com/kufu/smarthr-ui/commit/6e63c81d8a12673f06c98427b7db83199acbce80))
* SectioningContent系コンポーネントに対してdata-specなどの属性を設定可能にする ([#3545](https://github.com/kufu/smarthr-ui/issues/3545)) ([ffa8280](https://github.com/kufu/smarthr-ui/commit/ffa8280f742a85128f95d881fa0bbe71bdfc54be))


### Bug Fixes

* AccodionPanelのマークアップを修正し、Section内にHeadingが存在する状態にします ([#3522](https://github.com/kufu/smarthr-ui/issues/3522)) ([9e13844](https://github.com/kufu/smarthr-ui/commit/9e1384450e3cfe73d404d11edd476301f88df3f0))
* AppLuncherのHeadingが自動計算されるようにマークアップを変更する ([#3526](https://github.com/kufu/smarthr-ui/issues/3526)) ([076af86](https://github.com/kufu/smarthr-ui/commit/076af86bbec6cf6499a6f9b7aeef481c020f7b10))
* Checkboxのmixed属性が意図せず表示されてしまう問題を修正 ([#3548](https://github.com/kufu/smarthr-ui/issues/3548)) ([19b3ca9](https://github.com/kufu/smarthr-ui/commit/19b3ca99da0253761bf4751ab7b0ff5cf80493d3))
* eslint-plugin-smarthr で compilerOptions.paths が必須になったため暫定処置 ([#3550](https://github.com/kufu/smarthr-ui/issues/3550)) ([7026a9d](https://github.com/kufu/smarthr-ui/commit/7026a9d1e310d835dd32ec8aaa8f6ad44897798a))
* FormDialogのHeadingが自動計算されるようにマークアップを変更する ([#3523](https://github.com/kufu/smarthr-ui/issues/3523)) ([d0507d3](https://github.com/kufu/smarthr-ui/commit/d0507d379ae3f7d764c18117ca71924fb0206c07))
* InformationPanelのHeadingが自動計算されるようにマークアップを変更する ([#3525](https://github.com/kufu/smarthr-ui/issues/3525)) ([13baaaa](https://github.com/kufu/smarthr-ui/commit/13baaaa7f2f7635e13f5300e43b23b46cf095b8d))
* RightFixedNoteのHeadingが自動計算されるようにマークアップを変更する ([#3524](https://github.com/kufu/smarthr-ui/issues/3524)) ([e1dd140](https://github.com/kufu/smarthr-ui/commit/e1dd1408e54751922ef719abdda3de8122a7a5f2))

## [34.0.0](https://github.com/kufu/smarthr-ui/compare/v33.0.2...v34.0.0) (2023-07-04)


### ⚠ BREAKING CHANGES

* ActionDialogWithTriggerとRemoteTriggerActionDialogのonPressEscapeの引数にclose()が渡っていないのを修正 (#3517)

### Features

* 自動的にHeadingのレベルを計算するArticle, Aside, Nav, Sectionコンポーネントを追加 ([#3489](https://github.com/kufu/smarthr-ui/issues/3489)) ([0d5de00](https://github.com/kufu/smarthr-ui/commit/0d5de008f3c90c55e0d2ca62d8c85dc3cbfd7e3a)), closes [#1475](https://github.com/kufu/smarthr-ui/issues/1475) [#1517](https://github.com/kufu/smarthr-ui/issues/1517) [#1519](https://github.com/kufu/smarthr-ui/issues/1519) [#1584](https://github.com/kufu/smarthr-ui/issues/1584)


### Bug Fixes

* ActionDialogWithTriggerとRemoteTriggerActionDialogのonPressEscapeの引数にclose()が渡っていないのを修正 ([#3517](https://github.com/kufu/smarthr-ui/issues/3517)) ([1dd8a69](https://github.com/kufu/smarthr-ui/commit/1dd8a69e16b4f1a39678e462c65c9428bb25480b))
* FormControlのhtmlForとlabelIdが使えなくなっていたのを修正 ([#3504](https://github.com/kufu/smarthr-ui/issues/3504)) ([9a2bdb6](https://github.com/kufu/smarthr-ui/commit/9a2bdb65ac3ce781215e9d67b4a377c45e17e101))
* TabItemに設定されたidがItemButtonに設定されるように修正 ([#3515](https://github.com/kufu/smarthr-ui/issues/3515)) ([60a2dda](https://github.com/kufu/smarthr-ui/commit/60a2ddad192d45d69e087a03688233d668dd05a7))

### [33.0.2](https://github.com/kufu/smarthr-ui/compare/v33.0.1...v33.0.2) (2023-06-27)

### [33.0.1](https://github.com/kufu/smarthr-ui/compare/v33.0.0...v33.0.1) (2023-06-22)


### Bug Fixes

* alias をやめる ([#3485](https://github.com/kufu/smarthr-ui/issues/3485)) ([5d87554](https://github.com/kufu/smarthr-ui/commit/5d87554fbbb45ee701962adc6f8908ae86fbde91))

## [33.0.0](https://github.com/kufu/smarthr-ui/compare/v32.0.1...v33.0.0) (2023-06-21)


### ⚠ BREAKING CHANGES

* Icon の size をデザイントークンで指定するように変更 (#3431)
* FloatArea の errorText / errorIcon を廃止し、responseMessage を追加 (#3452)

### Features

* "SparklesIcon"の追加 ([#3447](https://github.com/kufu/smarthr-ui/issues/3447)) ([b2c9784](https://github.com/kufu/smarthr-ui/commit/b2c97847566fdc5dbca1cb96b1f323d380c17e9a))
* FloatArea の errorText / errorIcon を廃止し、responseMessage を追加 ([#3452](https://github.com/kufu/smarthr-ui/issues/3452)) ([5ec1e2b](https://github.com/kufu/smarthr-ui/commit/5ec1e2b000b7226e7357f39d2f13ffcb40714063))
* Icon の size をデザイントークンで指定するように変更 ([#3431](https://github.com/kufu/smarthr-ui/issues/3431)) ([2c5305e](https://github.com/kufu/smarthr-ui/commit/2c5305e6469e866217d1af391b83bb8625e26942))
* ResponseMessage を追加 ([#3449](https://github.com/kufu/smarthr-ui/issues/3449)) ([197ea72](https://github.com/kufu/smarthr-ui/commit/197ea72e856236133330012bdc2a1e027b046d42))


### Bug Fixes

* BulkActionRow や EmptyTableBody の colspan を算出するように変更 ([#3469](https://github.com/kufu/smarthr-ui/issues/3469)) ([35c082f](https://github.com/kufu/smarthr-ui/commit/35c082f82b42396a32f5c8946099f9b76f29991d))
* Button[loading] の invalid な HTML を修正 ([#3463](https://github.com/kufu/smarthr-ui/issues/3463)) ([cae7b35](https://github.com/kufu/smarthr-ui/commit/cae7b35ff56307ac2d3276c6dfc4f91cf04a0c41))
* Checkbox の indeterminate に aria-checked を使わないように修正 ([#3474](https://github.com/kufu/smarthr-ui/issues/3474)) ([3a6a011](https://github.com/kufu/smarthr-ui/commit/3a6a0119df3fdd6473aef32ba4ff7d1ef994ee5e))
* CheckBox の wrapper を span に変える ([#3468](https://github.com/kufu/smarthr-ui/issues/3468)) ([d135df2](https://github.com/kufu/smarthr-ui/commit/d135df22102e630b58c02e0ec6a4aa6d9dcef7a0))
* Dialog に width が指定されていない場合の max-width を vieport からの計算に変更 ([#3455](https://github.com/kufu/smarthr-ui/issues/3455)) ([730db72](https://github.com/kufu/smarthr-ui/commit/730db72564ddd16de1e9b701a64de574245c5cd7))
* Dialog の max-width が固定値になっている欠陥を修正 ([#3453](https://github.com/kufu/smarthr-ui/issues/3453)) ([8f9b337](https://github.com/kufu/smarthr-ui/commit/8f9b3375fd865c0c9810f7d808fcf6061af7bf1f))
* FormControl や Fieldset に不要な属性や値があたらないように修正 ([#3462](https://github.com/kufu/smarthr-ui/issues/3462)) ([34e4723](https://github.com/kufu/smarthr-ui/commit/34e4723d856e72d050c0b040f12024f9937a3d92))
* MultiComboBox の width / disabled が DOM に渡らないように修正 ([#3464](https://github.com/kufu/smarthr-ui/issues/3464)) ([40da11b](https://github.com/kufu/smarthr-ui/commit/40da11b51c6ebcf9cd99e18e494f3a965c3a2252))
* RadioButtonPanel の Story で HTML が valid になるよう修正 ([#3465](https://github.com/kufu/smarthr-ui/issues/3465)) ([584dd45](https://github.com/kufu/smarthr-ui/commit/584dd4530504b488df43b5e13307f02563336aa6))
* Select は label 内に含まれる可能性があるため span として提供 ([#3466](https://github.com/kufu/smarthr-ui/issues/3466)) ([6b3631f](https://github.com/kufu/smarthr-ui/commit/6b3631fb071a115044f456aacce08403d4972492))
* Storybook関連ファイルでも @/ エイリアスを利用可能にする ([#3473](https://github.com/kufu/smarthr-ui/issues/3473)) ([d1a38f9](https://github.com/kufu/smarthr-ui/commit/d1a38f9c8c2dabca5ceadd623448bed4bc28cc8e))
* styled-components v6 で削除予定の withComponent を使わないようにする ([#3446](https://github.com/kufu/smarthr-ui/issues/3446)) ([2439ec7](https://github.com/kufu/smarthr-ui/commit/2439ec74a6ee8bc97a46758947ebdba04364a3f3))
* Textarea は label 内に含まれる可能性があるため span として提供 ([#3467](https://github.com/kufu/smarthr-ui/issues/3467)) ([5f9ace8](https://github.com/kufu/smarthr-ui/commit/5f9ace8044c97a9e7410cf2c29c2b2f5b75827a0))
* 各 Dialog の id を portal の親要素に設定されるように修正 ([#3461](https://github.com/kufu/smarthr-ui/issues/3461)) ([fb72915](https://github.com/kufu/smarthr-ui/commit/fb72915e3badb70ddb0b4c4808c3e8772102e86e))

### [32.0.1](https://github.com/kufu/smarthr-ui/compare/v32.0.0...v32.0.1) (2023-06-12)


### Bug Fixes

* Td の position: relative 指定を削除 ([#3428](https://github.com/kufu/smarthr-ui/issues/3428)) ([ffced50](https://github.com/kufu/smarthr-ui/commit/ffced50f8aab24f0bcfa4250fb0581e6faeb53ef))

## [32.0.0](https://github.com/kufu/smarthr-ui/compare/v31.1.0...v32.0.0) (2023-06-07)


### ⚠ BREAKING CHANGES

* DefinitionList を画面サイズに応じて列数を変化させる (#3418)

### Features

* DefinitionList を画面サイズに応じて列数を変化させる ([#3418](https://github.com/kufu/smarthr-ui/issues/3418)) ([a65eae8](https://github.com/kufu/smarthr-ui/commit/a65eae8e4670e14f725f3cf5291658892c2d22c0))
* SpreadsheetTable を追加 ([#3402](https://github.com/kufu/smarthr-ui/issues/3402)) ([9ae76ad](https://github.com/kufu/smarthr-ui/commit/9ae76adef6dabc6f0f7ba8ccaf8e79b252bc55b7))


### Bug Fixes

* DropdownMenuButton のフォーカスリングが見切れていたので修正 ([#3396](https://github.com/kufu/smarthr-ui/issues/3396)) ([bcaa4be](https://github.com/kufu/smarthr-ui/commit/bcaa4be271b849a5fb749fb129b29da9358138ef))
* TableReelにclassNameを設定, Td,Thに不要な文字列が入っていたので修正 ([#3403](https://github.com/kufu/smarthr-ui/issues/3403)) ([142c4c8](https://github.com/kufu/smarthr-ui/commit/142c4c8805e0247e52940a760ead883c57581f38))
* types 配下の整理と barrel import 対応 ([#3410](https://github.com/kufu/smarthr-ui/issues/3410)) ([1e660f5](https://github.com/kufu/smarthr-ui/commit/1e660f5c9739fba569df4fcc61a490089de0de76))

## [31.1.0](https://github.com/kufu/smarthr-ui/compare/v31.0.0...v31.1.0) (2023-05-29)


### Features

* FormGroup とフォームコントロールが内部的に id で紐づくように修正 ([#3357](https://github.com/kufu/smarthr-ui/issues/3357)) ([af50425](https://github.com/kufu/smarthr-ui/commit/af50425ce89c9eb96a0868bfafccff7caf277889))
* FormGroup に入力例と補足文を追加 ([#3358](https://github.com/kufu/smarthr-ui/issues/3358)) ([e9070f4](https://github.com/kufu/smarthr-ui/commit/e9070f47686f33ab3dc428cbe2656c1033052835))


### Bug Fixes

* Dialog に width を指定した場合に max-width が効かなくなる欠陥を修正 ([#3391](https://github.com/kufu/smarthr-ui/issues/3391)) ([cf484bd](https://github.com/kufu/smarthr-ui/commit/cf484bd6a90782cdf5c2d3733e469154b3133f66))
* FormControl の子要素に幅が指定できない欠陥を修正 ([#3390](https://github.com/kufu/smarthr-ui/issues/3390)) ([cec9ec8](https://github.com/kufu/smarthr-ui/commit/cec9ec83a84683b46d8115fc51c1f4e64c6a7550))

## [31.0.0](https://github.com/kufu/smarthr-ui/compare/v30.10.0...v31.0.0) (2023-05-23)


### ⚠ BREAKING CHANGES

* FormGroup をセマンティックに扱えるよう修正 (#3356)

### Features

* FormGroup をセマンティックに扱えるよう修正 ([#3356](https://github.com/kufu/smarthr-ui/issues/3356)) ([797e851](https://github.com/kufu/smarthr-ui/commit/797e8518ba0fed36f77a579cb797a9e686e6faa7))

## [30.10.0](https://github.com/kufu/smarthr-ui/compare/v30.9.0...v30.10.0) (2023-05-16)


### Features

* FilterDropdown に responseMessage を渡せるようにする ([#3348](https://github.com/kufu/smarthr-ui/issues/3348)) ([34cac73](https://github.com/kufu/smarthr-ui/commit/34cac7370c8d506d3cac2b65ceffbfe3e786f6b1))

## [30.9.0](https://github.com/kufu/smarthr-ui/compare/v30.8.0...v30.9.0) (2023-05-15)


### Features

* FormDialog & RemoteTriggerFormDialog を実装 ([#3332](https://github.com/kufu/smarthr-ui/issues/3332)) ([f92d857](https://github.com/kufu/smarthr-ui/commit/f92d857fc02da7fb039a4300f5818893b0096ed5))


### Bug Fixes

* Button 単体で disabledDetail が使えるように修正 ([#3346](https://github.com/kufu/smarthr-ui/issues/3346)) ([682adca](https://github.com/kufu/smarthr-ui/commit/682adca39c687595bead2c78dfadd2f2ae78158e))
* onAdd の型を React.ReactNode から string に変更 ([#3329](https://github.com/kufu/smarthr-ui/issues/3329)) ([d03b866](https://github.com/kufu/smarthr-ui/commit/d03b866bb5cea6073d119865903f00e8ab1b8b45))
* SideMenuItem の focus を focus-visible に変更 ([#3333](https://github.com/kufu/smarthr-ui/issues/3333)) ([224029f](https://github.com/kufu/smarthr-ui/commit/224029fc98db78cf48250fb1ec613629c9e706e8))

## [30.8.0](https://github.com/kufu/smarthr-ui/compare/v30.7.0...v30.8.0) (2023-05-10)


### Features

* DropdownMenuButton の childrenに型的に渡される可能性のあるfalsyな値を許容する ([#3291](https://github.com/kufu/smarthr-ui/issues/3291)) ([0d8298c](https://github.com/kufu/smarthr-ui/commit/0d8298cc51f36c4a6b1b1820657b86f7eb9d2049))
* RadioButtonPanel を追加 ([#3317](https://github.com/kufu/smarthr-ui/issues/3317)) ([ae95db5](https://github.com/kufu/smarthr-ui/commit/ae95db5d399855d6a71c5fcd8f47b30f0c570df8))
* TableReelを追加 ([#3249](https://github.com/kufu/smarthr-ui/issues/3249)) ([1485496](https://github.com/kufu/smarthr-ui/commit/1485496ae7261a7f5400adf564bfaf40da1f0c14))
* ハイコントラストモードに対応 ([#3236](https://github.com/kufu/smarthr-ui/issues/3236)) ([3032a63](https://github.com/kufu/smarthr-ui/commit/3032a637a0efbf75ce15bbe2a297e3cc1ddb0cf3))


### Bug Fixes

* Th のソートアイコンがフォントサイズに依って重なってしまうバグを修正 ([#3290](https://github.com/kufu/smarthr-ui/issues/3290)) ([157b0c2](https://github.com/kufu/smarthr-ui/commit/157b0c2495ad8276385076fc44bb105a17a17598))

## [30.7.0](https://github.com/kufu/smarthr-ui/compare/v30.6.0...v30.7.0) (2023-04-25)


### Features

* ComboBoxのinput要素にrequired属性と、それ以外の属性を設定できるinputAttributesを追加する ([#3284](https://github.com/kufu/smarthr-ui/issues/3284)) ([1828338](https://github.com/kufu/smarthr-ui/commit/18283383d19bb0eb9056cb06923374a3a6287822))
* Enable ComboBox item.label to accept ReactNode ([#3270](https://github.com/kufu/smarthr-ui/issues/3270)) ([b1e3a42](https://github.com/kufu/smarthr-ui/commit/b1e3a4215f4dc7a8c201b895171d3119e1113bfc))

## [30.6.0](https://github.com/kufu/smarthr-ui/compare/v30.5.0...v30.6.0) (2023-04-18)


### Features

* RemoteTriggerMessageDialog を追加する ([#3260](https://github.com/kufu/smarthr-ui/issues/3260)) ([565d03c](https://github.com/kufu/smarthr-ui/commit/565d03c82a2049837d9a1e633a99f593a2c6f5df))


### Bug Fixes

* ドロップダウンメニューの項目が長いときに項目がベースを突き抜けてしまうのを修正した ([#3252](https://github.com/kufu/smarthr-ui/issues/3252)) ([68b6341](https://github.com/kufu/smarthr-ui/commit/68b63417f0d0c3ad7a045df1db6a62aebbb40864))

## [30.5.0](https://github.com/kufu/smarthr-ui/compare/v30.4.0...v30.5.0) (2023-04-13)


### Features

* AppLauncher の多言語化対応 ([#3264](https://github.com/kufu/smarthr-ui/issues/3264)) ([96c345f](https://github.com/kufu/smarthr-ui/commit/96c345f9e36c05aedce4e515c489f6ba2f2d6bee))

## [30.4.0](https://github.com/kufu/smarthr-ui/compare/v30.3.0...v30.4.0) (2023-04-12)


### Features

* FilterDropdown の trigger に任意の button props を渡せるようにする ([#3261](https://github.com/kufu/smarthr-ui/issues/3261)) ([54a75d3](https://github.com/kufu/smarthr-ui/commit/54a75d33eefecf58d0907655d674966872909993))

## [30.3.0](https://github.com/kufu/smarthr-ui/compare/v30.2.0...v30.3.0) (2023-04-04)


### Features

* Input に read-only な視覚的表現を追加 ([#3224](https://github.com/kufu/smarthr-ui/issues/3224)) ([510e44f](https://github.com/kufu/smarthr-ui/commit/510e44fcd187adfd669f5626e40bc1d1c522a341))
* MouseEventを扱えるようにする ([dccd952](https://github.com/kufu/smarthr-ui/commit/dccd95230d58337147845fb3826760f521b1c42d))
* MouseEventを扱えるようにする ([#3237](https://github.com/kufu/smarthr-ui/issues/3237)) ([6078dc9](https://github.com/kufu/smarthr-ui/commit/6078dc94ae89a10f0cd268caad61a308bf731b9c))
* RemoteTriggerActionDialogを実装 ([#3227](https://github.com/kufu/smarthr-ui/issues/3227)) ([409a38d](https://github.com/kufu/smarthr-ui/commit/409a38d6673e8836fd985f506fd5918bc4762623))


### Bug Fixes

* decorators内の個別のdecoratorの指定を任意にする ([#3235](https://github.com/kufu/smarthr-ui/issues/3235)) ([50b2ec8](https://github.com/kufu/smarthr-ui/commit/50b2ec83801fe1e3cd7ba1c548fdb009c44fcdb0))
* ModelessDialog 内のスクロールが伝搬しないように制御 ([#3238](https://github.com/kufu/smarthr-ui/issues/3238)) ([4383789](https://github.com/kufu/smarthr-ui/commit/4383789bb52b8b183469d94dedbbf61740064256))

## [30.2.0](https://github.com/kufu/smarthr-ui/compare/v30.1.1...v30.2.0) (2023-03-22)


### Features

* MessageScreen のロゴを差し替えられるように修正 ([#3204](https://github.com/kufu/smarthr-ui/issues/3204)) ([a83bce3](https://github.com/kufu/smarthr-ui/commit/a83bce399a71ca1279a6e7687e88d5f146a8fe1e))
* 翻訳用コンポーネントなどを差し込み可能にするため string型 を ReactNode に変更する ([#3203](https://github.com/kufu/smarthr-ui/issues/3203)) ([4cc6091](https://github.com/kufu/smarthr-ui/commit/4cc609141b85c8f09a0778bc44459a16001d81e0))


### Bug Fixes

* Calendar の初期表示を修正 ([#3211](https://github.com/kufu/smarthr-ui/issues/3211)) ([37d668f](https://github.com/kufu/smarthr-ui/commit/37d668f3205586c141aed6d62877cdfffefb91d5))

### [30.1.1](https://github.com/kufu/smarthr-ui/compare/v30.1.0...v30.1.1) (2023-03-14)


### Bug Fixes

* FilterDropdown の効いていないスタイリングを修正 ([#3185](https://github.com/kufu/smarthr-ui/issues/3185)) ([de4f67e](https://github.com/kufu/smarthr-ui/commit/de4f67e1630a107a183bbfe2bab6995f8f8b8b2e))
* SSRでの使用を考慮し、不必要なuseLayoutEffectの使用をなくす ([#3186](https://github.com/kufu/smarthr-ui/issues/3186)) ([a8b57b1](https://github.com/kufu/smarthr-ui/commit/a8b57b186b057ec8964730d60b05289ceba571f7))

## [30.1.0](https://github.com/kufu/smarthr-ui/compare/v30.0.1...v30.1.0) (2023-03-07)


### Features

* ActionDialogWithTrigger を実装 ([#3172](https://github.com/kufu/smarthr-ui/issues/3172)) ([72bfd6c](https://github.com/kufu/smarthr-ui/commit/72bfd6c23a8ecb39b53fb6469a61259823904894))


### Bug Fixes

* FilterDropdownのResetButtonLayoutにthemeを渡すようにする ([#3181](https://github.com/kufu/smarthr-ui/issues/3181)) ([ced8de8](https://github.com/kufu/smarthr-ui/commit/ced8de8d4978344b0c96da352b023c9db0df7eb4))

### [30.0.1](https://github.com/kufu/smarthr-ui/compare/v30.0.0...v30.0.1) (2023-03-01)


### Bug Fixes

* alias import を相対パスに置き換え ([#3173](https://github.com/kufu/smarthr-ui/issues/3173)) ([22260f2](https://github.com/kufu/smarthr-ui/commit/22260f22fc6c0191bf648aaf3b1b1d07760ad622))

## [30.0.0](https://github.com/kufu/smarthr-ui/compare/v29.0.2...v30.0.0) (2023-03-01)


### ⚠ BREAKING CHANGES

* ActionDialog の processing を Button の loading で置き換え (#3159)
* FloatArea の top / bottom をデザイントークンで指定するように修正 (#3153)

### Features

* ActionDialog の processing を Button の loading で置き換え ([#3159](https://github.com/kufu/smarthr-ui/issues/3159)) ([ffc6d9a](https://github.com/kufu/smarthr-ui/commit/ffc6d9ab6351dc1f6a377e0f7fe40fa1799e1c43))
* generateIcon を追加 ([#3161](https://github.com/kufu/smarthr-ui/issues/3161)) ([296b316](https://github.com/kufu/smarthr-ui/commit/296b316bb6e452f48c34e9c0ae038ee6c209fab8))


### Bug Fixes

* DropdownMenuButton に渡した props を引き金となるボタンに渡すよう修正 ([#3152](https://github.com/kufu/smarthr-ui/issues/3152)) ([72c669a](https://github.com/kufu/smarthr-ui/commit/72c669ae2e81f4c75d0bd90025bad0d58c4d93fc))
* FloatArea の top / bottom をデザイントークンで指定するように修正 ([#3153](https://github.com/kufu/smarthr-ui/issues/3153)) ([8028e2e](https://github.com/kufu/smarthr-ui/commit/8028e2e91f776b9de04c4ea21512241f05216a72))
* Pagination の aria-label の内容が aria-current とダブっているため調整する ([#3147](https://github.com/kufu/smarthr-ui/issues/3147)) ([92ed7d6](https://github.com/kufu/smarthr-ui/commit/92ed7d6b9051b7d1834b0566109e395956fcdc13))

### [29.0.2](https://github.com/kufu/smarthr-ui/compare/v29.0.1...v29.0.2) (2023-02-24)


### Bug Fixes

* DatePicker の和暦入力後に Enter で変換されないバグを修正 ([#3150](https://github.com/kufu/smarthr-ui/issues/3150)) ([48b1292](https://github.com/kufu/smarthr-ui/commit/48b129265cdc9ff21ae35e1b37815edb4fd54949))
* 存在しない onSort を使っていたため修正 ([#3156](https://github.com/kufu/smarthr-ui/issues/3156)) ([96ee00d](https://github.com/kufu/smarthr-ui/commit/96ee00daf0d8c78784d5ae23d7d5fde168718a05))

### [29.0.1](https://github.com/kufu/smarthr-ui/compare/v29.0.0...v29.0.1) (2023-02-24)


### Bug Fixes

* FilterDropdown が狭い画面幅でも使えるように修正 ([#3130](https://github.com/kufu/smarthr-ui/issues/3130)) ([beb0776](https://github.com/kufu/smarthr-ui/commit/beb0776a1f63aded4068392708c797f5a087b9b2))
* Th/TdCheckbox の export 漏れを修正 ([#3151](https://github.com/kufu/smarthr-ui/issues/3151)) ([e41208f](https://github.com/kufu/smarthr-ui/commit/e41208fbcd04eff6428053c746c584212b6b5d27))

## [29.0.0](https://github.com/kufu/smarthr-ui/compare/v28.0.0...v29.0.0) (2023-02-21)


### ⚠ BREAKING CHANGES

* Th に並び替え機能を追加 (#3128)
* VisuallyHiddenTextコンポーネントを追加する (#3126)

### Features

* Base に overflow を追加 ([#3129](https://github.com/kufu/smarthr-ui/issues/3129)) ([07e214b](https://github.com/kufu/smarthr-ui/commit/07e214b82a27fc638c28e231bdf4a90598afcc92))
* Th に並び替え機能を追加 ([#3128](https://github.com/kufu/smarthr-ui/issues/3128)) ([20cb8d0](https://github.com/kufu/smarthr-ui/commit/20cb8d0de1c73c2d357088b0eb68e4abc7bb23a6))
* ThCheckbox と TdCheckbox を追加 ([#3136](https://github.com/kufu/smarthr-ui/issues/3136)) ([a9b9fd0](https://github.com/kufu/smarthr-ui/commit/a9b9fd0d05ad17b961b7bcbc56378640a8f62bba))
* VisuallyHiddenTextコンポーネントを追加する ([#3126](https://github.com/kufu/smarthr-ui/issues/3126)) ([20a2ed4](https://github.com/kufu/smarthr-ui/commit/20a2ed4cd85d873707739a33b290a4d6b85695c9))


### Bug Fixes

* DatePicker の width を指定できるように修正 ([#3133](https://github.com/kufu/smarthr-ui/issues/3133)) ([4761a93](https://github.com/kufu/smarthr-ui/commit/4761a932c910b8c3ecd852e4856e246db54e5e7a))
* HeadlineArea を deprecated にする ([#3132](https://github.com/kufu/smarthr-ui/issues/3132)) ([1ddcdcc](https://github.com/kufu/smarthr-ui/commit/1ddcdcc2900d21953ec3c5d327ced15a5076f77d))
* InputFileの背景色指定漏れに対応する ([#3135](https://github.com/kufu/smarthr-ui/issues/3135)) ([5a082e5](https://github.com/kufu/smarthr-ui/commit/5a082e5a5538f2bfe6df2dd608029595c808d44e))
* SingleComboBox 内の typo を修正 ([#3134](https://github.com/kufu/smarthr-ui/issues/3134)) ([98ecead](https://github.com/kufu/smarthr-ui/commit/98eceada17dabde20b666d7d5235e88b33706f41))

## [28.0.0](https://github.com/kufu/smarthr-ui/compare/v27.1.0...v28.0.0) (2023-02-14)


### ⚠ BREAKING CHANGES

* コンポーネント内の文言を変更する方法をdecoratorsに統一する ([#3039](https://github.com/kufu/smarthr-ui/issues/3039)) ([5cc10ca](https://github.com/kufu/smarthr-ui/commit/5cc10ca7f119f83d335c642495b0475264fe203d))

## [27.1.0](https://github.com/kufu/smarthr-ui/compare/v27.0.0...v27.1.0) (2023-02-08)


### Features

* ActionDialog に decorators オプションを追加する ([#3095](https://github.com/kufu/smarthr-ui/issues/3095)) ([4c05b57](https://github.com/kufu/smarthr-ui/commit/4c05b575052cec8b787073338e039a815c64a5c2))
* circleciにchromaticを追加 ([#3067](https://github.com/kufu/smarthr-ui/issues/3067)) ([a86dc8d](https://github.com/kufu/smarthr-ui/commit/a86dc8d6998c9f27e8992dff8494fa931b9dc0f2))
* MessageDialog に decorators オプションを追加する ([#3094](https://github.com/kufu/smarthr-ui/issues/3094)) ([0935372](https://github.com/kufu/smarthr-ui/commit/093537204fe077b735573e3121a2ba84a13b41ea))
* ModelessDialog に decorators属性を追加する ([#3087](https://github.com/kufu/smarthr-ui/issues/3087)) ([75e27e2](https://github.com/kufu/smarthr-ui/commit/75e27e2f90b8c155bf029fbb0c2798c59414809c))
* storysourceを追加 ([#3090](https://github.com/kufu/smarthr-ui/issues/3090)) ([2a8acf9](https://github.com/kufu/smarthr-ui/commit/2a8acf91edefcd45d8607a24cbe84c56fd678d2d))


### Bug Fixes

* Button の無効理由が見きれないように Tooltip の位置を自動に変更 ([#3092](https://github.com/kufu/smarthr-ui/issues/3092)) ([5d2df56](https://github.com/kufu/smarthr-ui/commit/5d2df5660797328b6e7d2be4f2a28c1edacfd972))
* SideMenu の現在地色が背景色の上に載ると見えなかったので調整 ([#3091](https://github.com/kufu/smarthr-ui/issues/3091)) ([60d669d](https://github.com/kufu/smarthr-ui/commit/60d669d1dfb4b9db13ad766dc1dd26d7316002e4))

## [27.0.0](https://github.com/kufu/smarthr-ui/compare/v26.1.0...v27.0.0) (2023-02-01)


### ⚠ BREAKING CHANGES

* Center の天地中央揃えを verticalCentering に変更 (#3079)
* DropdownMenuButton の labelのデフォルト値を削除 (#3078)

### Features

* Base に背景色を指定するための color を追加 ([#3081](https://github.com/kufu/smarthr-ui/issues/3081)) ([99d11e2](https://github.com/kufu/smarthr-ui/commit/99d11e2e8ac1e8e10d30161e0c28718ca9aec2ed))
* BaseColumn を追加 ([#3085](https://github.com/kufu/smarthr-ui/issues/3085)) ([8dd0ae1](https://github.com/kufu/smarthr-ui/commit/8dd0ae11a23cba8af67602313bfa4f8abd0de807)), closes [#3081](https://github.com/kufu/smarthr-ui/issues/3081)
* DropZone に decorators 属性を追加 ([#3084](https://github.com/kufu/smarthr-ui/issues/3084)) ([6cc5240](https://github.com/kufu/smarthr-ui/commit/6cc524098688282d03db7cfbc0c204b19eb0577a))
* filter-dropdown に decorators 属性を追加 ([#3064](https://github.com/kufu/smarthr-ui/issues/3064)) ([c5116e8](https://github.com/kufu/smarthr-ui/commit/c5116e889bd09193741be9cab12ebac5c4e143ae))
* header コンポーネントのtenants[number].name を string から ReactNode に変更 ([#3063](https://github.com/kufu/smarthr-ui/issues/3063)) ([9e827fe](https://github.com/kufu/smarthr-ui/commit/9e827fe3fbbda1bcfee7a172700f1b7216e3366e))
* icon の alt属性を ReactNode に変更する ([#3060](https://github.com/kufu/smarthr-ui/issues/3060)) ([49ecb5b](https://github.com/kufu/smarthr-ui/commit/49ecb5b6e2f691fbd8cbef9a09089408c1f724c0))
* message-screen の links[number]label を string から ReactNode に変更 ([#3055](https://github.com/kufu/smarthr-ui/issues/3055)) ([5d59b81](https://github.com/kufu/smarthr-ui/commit/5d59b81b171914707f1987d21e9101c41774ff8c))
* search-input に decorators 属性を追加 ([#3068](https://github.com/kufu/smarthr-ui/issues/3068)) ([a5434d5](https://github.com/kufu/smarthr-ui/commit/a5434d5bfbb5adb4d32f1ff5061edc61b9ffe6e7))
* SideMenu を実験的に追加 ([#3070](https://github.com/kufu/smarthr-ui/issues/3070)) ([847cecf](https://github.com/kufu/smarthr-ui/commit/847cecf55b793698afcd4500e9f05a0acb548349))


### Bug Fixes

* Center の天地中央揃えを verticalCentering に変更 ([#3079](https://github.com/kufu/smarthr-ui/issues/3079)) ([6a277d3](https://github.com/kufu/smarthr-ui/commit/6a277d3dc4862cc85518d3868e8b430618697f3e))
* SideMenu の current が iOS の VoiceOver で効いていなかったので修正 ([#3086](https://github.com/kufu/smarthr-ui/issues/3086)) ([897c0db](https://github.com/kufu/smarthr-ui/commit/897c0dbd5a6bcb8a30721505e4bf551bc22acefb))


* DropdownMenuButton の labelのデフォルト値を削除 ([#3078](https://github.com/kufu/smarthr-ui/issues/3078)) ([e5cc491](https://github.com/kufu/smarthr-ui/commit/e5cc4916c545068e52c5c25996bae5b66826b920))

## [26.1.0](https://github.com/kufu/smarthr-ui/compare/v26.0.0...v26.1.0) (2023-01-26)


### Features

* information-panel に decoratorsオプションを追加 ([#3052](https://github.com/kufu/smarthr-ui/issues/3052)) ([e68a584](https://github.com/kufu/smarthr-ui/commit/e68a5840493d7e7b93a0873c98c7c7eb27c6e088))
* input-file に decoratorsオプションを追加 ([#3056](https://github.com/kufu/smarthr-ui/issues/3056)) ([e2aa566](https://github.com/kufu/smarthr-ui/commit/e2aa566160bf4760e4d2aee6186ac5f1235df99a))
* loader の alt, text オプションを ReactNode に変更 ([#3057](https://github.com/kufu/smarthr-ui/issues/3057)) ([fa63a4e](https://github.com/kufu/smarthr-ui/commit/fa63a4e18f0b348cda5d8472a821623bccc899f1))
* right-fixed-note に decoratorsオプションを追加 ([#3054](https://github.com/kufu/smarthr-ui/issues/3054)) ([42eadda](https://github.com/kufu/smarthr-ui/commit/42eadda559a962ac777f2cfade5fc09c0a5cc5ad))
* select に decoratorsオプションを追加 ([#3053](https://github.com/kufu/smarthr-ui/issues/3053)) ([a8147fd](https://github.com/kufu/smarthr-ui/commit/a8147fd838632ce7ba640804d56b1e3d6295c50e))
* textarea に decorators props を追加 ([#3048](https://github.com/kufu/smarthr-ui/issues/3048)) ([7eb8cde](https://github.com/kufu/smarthr-ui/commit/7eb8cdeddf8500f01170ae598df6d0666095e86b))
* ドラッグハンドルの色を常時表示・ホバーカラーを設定する ([#3051](https://github.com/kufu/smarthr-ui/issues/3051)) ([bc24a40](https://github.com/kufu/smarthr-ui/commit/bc24a404ab28dd267dd3b0d82e6e2c892a93c256))


### Bug Fixes

* add overflow: hidden; to Loader ([#3058](https://github.com/kufu/smarthr-ui/issues/3058)) ([af691af](https://github.com/kufu/smarthr-ui/commit/af691af6a78e29a0f6e3974c05a89a25a3e4feff))
* classNameを追加 ([#3059](https://github.com/kufu/smarthr-ui/issues/3059)) ([83dab22](https://github.com/kufu/smarthr-ui/commit/83dab224ae11bab48a4b8e8b786e080cb398fbe0))
* EmptyTableBody に要素 props を追加 ([89a016c](https://github.com/kufu/smarthr-ui/commit/89a016c5e649c262e4a52d4a138b645cdeac4399))
* ダイアログが `portalParent` 指定時に動かなくなっていた問題の修正 ([#3061](https://github.com/kufu/smarthr-ui/issues/3061)) ([5fdba7e](https://github.com/kufu/smarthr-ui/commit/5fdba7eaed233c9e7a91767192ec2950e0cb7318))
* チャート色を30色に拡張 ([#3062](https://github.com/kufu/smarthr-ui/issues/3062)) ([6317954](https://github.com/kufu/smarthr-ui/commit/6317954fa1c91033a6556e9be04f4eefe5e10baf))

## [26.0.0](https://github.com/kufu/smarthr-ui/compare/v25.1.1...v26.0.0) (2023-01-23)


### ⚠ BREAKING CHANGES

* dropdown-button を dropdown-menu-button にrename (#3038)

* dropdown-button を dropdown-menu-button にrename ([#3038](https://github.com/kufu/smarthr-ui/issues/3038)) ([cadb652](https://github.com/kufu/smarthr-ui/commit/cadb65229692719c28cbcb2dbd4176770ab8d89a))

### [25.1.1](https://github.com/kufu/smarthr-ui/compare/v25.1.0...v25.1.1) (2023-01-20)

## [25.1.0](https://github.com/kufu/smarthr-ui/compare/v25.0.2...v25.1.0) (2023-01-19)


### Features

* グラフ色を追加 ([#3023](https://github.com/kufu/smarthr-ui/issues/3023)) ([dff34e8](https://github.com/kufu/smarthr-ui/commit/dff34e866c9d0ad076c2a7f6d8ca5609a3e7128a))


### Bug Fixes

* MultiComboBox と FilterDropdown を組み合わせて使うと特定の状況で意図せずドロップダウンが閉じるのを修正した ([#3035](https://github.com/kufu/smarthr-ui/issues/3035)) ([8afd405](https://github.com/kufu/smarthr-ui/commit/8afd405d4621effdf6d09de654c6aeba16834946))

### [25.0.2](https://github.com/kufu/smarthr-ui/compare/v25.0.1...v25.0.2) (2022-12-27)


### Bug Fixes

* add line-height to AppLauncher ([#3005](https://github.com/kufu/smarthr-ui/issues/3005)) ([c04f16f](https://github.com/kufu/smarthr-ui/commit/c04f16f1c5bc961bc86edde36abc48737d0ce441))

### [25.0.1](https://github.com/kufu/smarthr-ui/compare/v25.0.0...v25.0.1) (2022-12-22)


### Bug Fixes

* Header, AppLauncher の props で入れられる値を広げる ([#2995](https://github.com/kufu/smarthr-ui/issues/2995)) ([4337492](https://github.com/kufu/smarthr-ui/commit/4337492677e79205c93e9d009d6f4550e24d6910))

## [25.0.0](https://github.com/kufu/smarthr-ui/compare/v24.3.0...v25.0.0) (2022-12-20)


### ⚠ BREAKING CHANGES

* ヘッダーの tenants props 型を変更 (#2983)

### Features

* CheckBoxにエラーのステータスを追加する ([#2985](https://github.com/kufu/smarthr-ui/issues/2985)) ([f9d6d44](https://github.com/kufu/smarthr-ui/commit/f9d6d447cc7c5cbd3449b2b4e67c0ff4585e3cbe))


### Bug Fixes

* tertiaryLinkのtextにReactNodeを渡せるよう修正 ([#2984](https://github.com/kufu/smarthr-ui/issues/2984)) ([4da379f](https://github.com/kufu/smarthr-ui/commit/4da379fe29918b13135db73e0a3e220509e735ac))
* valueからvariantに変更 ([#2986](https://github.com/kufu/smarthr-ui/issues/2986)) ([2ab98df](https://github.com/kufu/smarthr-ui/commit/2ab98df883d0ca3da8650579d9a041d774a25629))
* インポートしやすいよう、トップレベルで EmptyTableBody を export ([#2988](https://github.com/kufu/smarthr-ui/issues/2988)) ([f15942f](https://github.com/kufu/smarthr-ui/commit/f15942f9de637787f9ed140374a6bc683dd4307c))
* ヘッダーの tenants props 型を変更 ([#2983](https://github.com/kufu/smarthr-ui/issues/2983)) ([73ae3a7](https://github.com/kufu/smarthr-ui/commit/73ae3a76040afd6204f24965c9eb38da02ee199c))

## [24.3.0](https://github.com/kufu/smarthr-ui/compare/v24.2.0...v24.3.0) (2022-12-12)


### Features

* `EmptyTableBody` の追加 ([#2948](https://github.com/kufu/smarthr-ui/issues/2948)) ([9f8ab6e](https://github.com/kufu/smarthr-ui/commit/9f8ab6ed69561e877a930f01ee91c80c241a1a90))
* SingleComboBox の onClear の引数に event を渡せるようにした ([#2950](https://github.com/kufu/smarthr-ui/issues/2950)) ([2636ee5](https://github.com/kufu/smarthr-ui/commit/2636ee5256d9a219c15167f4fe6b1f2e9d12f17c))
* アプリランチャーの urlToShowAll props を optional にする ([#2969](https://github.com/kufu/smarthr-ui/issues/2969)) ([d0124d0](https://github.com/kufu/smarthr-ui/commit/d0124d0ac863684b6ea16b174ad88b026f1979a7))


### Bug Fixes

* ComboBoxのstyle調整 & inputにfocusしたままdropdownが閉じた状態でcaret downをクリックしてもdropdownが開かない問題を修正 ([#2964](https://github.com/kufu/smarthr-ui/issues/2964)) ([50cea8d](https://github.com/kufu/smarthr-ui/commit/50cea8dbff5759b903a681fc21baa81eec5572cd))
* inputWithTooltip で width に比率を渡しても適用されるようにする ([#2970](https://github.com/kufu/smarthr-ui/issues/2970)) ([9552c0b](https://github.com/kufu/smarthr-ui/commit/9552c0bd85a68b09a36dd108ae78f37ec4bfc6cd))
* ルートからのインポートをやめる ([#2980](https://github.com/kufu/smarthr-ui/issues/2980)) ([03f5b87](https://github.com/kufu/smarthr-ui/commit/03f5b87320c9413208cb9fba0c91c483bcbf7fd3))

## [24.2.0](https://github.com/kufu/smarthr-ui/compare/v24.1.0...v24.2.0) (2022-12-07)


### Features

* アプリランチャーを追加 ([#2916](https://github.com/kufu/smarthr-ui/issues/2916)) ([ed84167](https://github.com/kufu/smarthr-ui/commit/ed8416763383134500105bc5eb7fac0f3f6fd0c3))


### Bug Fixes

* Dropdown系コンポーネント内で SingleComboBoxの選択肢をclickすると Dropdownが閉じてしまうバグを修正する ([#2949](https://github.com/kufu/smarthr-ui/issues/2949)) ([41c3728](https://github.com/kufu/smarthr-ui/commit/41c3728f171a1c0baf559fa1c51b323001c39c90))
* typeof の比較を修正 ([#2963](https://github.com/kufu/smarthr-ui/issues/2963)) ([af36505](https://github.com/kufu/smarthr-ui/commit/af36505e70fafcc45c9a479ab22067434ca42044))

## [24.1.0](https://github.com/kufu/smarthr-ui/compare/v24.0.0...v24.1.0) (2022-11-30)


### Features

* `Center` の追加 ([#2928](https://github.com/kufu/smarthr-ui/issues/2928)) ([4c97960](https://github.com/kufu/smarthr-ui/commit/4c9796005cd15dda687dc7f87eb28688f365b3a1))
* combo box に decorator option を追加する ([#2932](https://github.com/kufu/smarthr-ui/issues/2932)) ([cfa30bb](https://github.com/kufu/smarthr-ui/commit/cfa30bb91ad9863ce13edd605504da96420b0c84))
* dropdown width option の初期値をautoにする ([#2938](https://github.com/kufu/smarthr-ui/issues/2938)) ([883573e](https://github.com/kufu/smarthr-ui/commit/883573ec8eeec70273f8c096f7714455a2cbf573))
* MultiComboBoxのドロップダウンリストの幅を指定可能にする ([#2935](https://github.com/kufu/smarthr-ui/issues/2935)) ([404a57e](https://github.com/kufu/smarthr-ui/commit/404a57ed097163d75cb903df8d44e9769a3603f1))
* PageCounter を追加 ([#2921](https://github.com/kufu/smarthr-ui/issues/2921)) ([07f4c10](https://github.com/kufu/smarthr-ui/commit/07f4c10e59a169db3e5790fe1c92fe447911b61e))
* SingleComboBoxのドロップダウンリストの幅を指定可能にする ([#2920](https://github.com/kufu/smarthr-ui/issues/2920)) ([b00160d](https://github.com/kufu/smarthr-ui/commit/b00160d0cab4e812c3c41f876a2e6f63319a1e8f))
* 入力系コンポーネントに ref を渡せるよう修正 ([#2933](https://github.com/kufu/smarthr-ui/issues/2933)) ([37af5e5](https://github.com/kufu/smarthr-ui/commit/37af5e598ae5221eda1aada2ce91ddc4bafaf441))


### Bug Fixes

* portal root 要素の管理方法を state から ref に変更 ([#2936](https://github.com/kufu/smarthr-ui/issues/2936)) ([7de4fd3](https://github.com/kufu/smarthr-ui/commit/7de4fd3db3a65f536e0f8b91488a9366e5cdc4e5))
* カスタムボタン判定を最初に行うように変更 ([#2937](https://github.com/kufu/smarthr-ui/issues/2937)) ([fa1cf47](https://github.com/kufu/smarthr-ui/commit/fa1cf4792c766bfdffe783ad0e37a687f133c020))

## [24.0.0](https://github.com/kufu/smarthr-ui/compare/v23.6.0...v24.0.0) (2022-11-21)


### ⚠ BREAKING CHANGES

* drop IndexNav component (#2917)

### Features

* InputFileの文言を変更可能にする ([#2919](https://github.com/kufu/smarthr-ui/issues/2919)) ([214036d](https://github.com/kufu/smarthr-ui/commit/214036d436c78420669576ba6ba47a72e481fe9c))
* 一部の入力系コンポーネントに ref を渡せるよう修正 ([#2929](https://github.com/kufu/smarthr-ui/issues/2929)) ([1af55af](https://github.com/kufu/smarthr-ui/commit/1af55afab4a1745d75b66413848c91b353961f47))


### Bug Fixes

* combobox default-item optionのバグを修正する ([#2914](https://github.com/kufu/smarthr-ui/issues/2914)) ([9ed78ad](https://github.com/kufu/smarthr-ui/commit/9ed78ada4e7cbd44d083166d8be973a1add69866))
* Tooltip を div から span に変更 ([#2918](https://github.com/kufu/smarthr-ui/issues/2918)) ([6afa0b4](https://github.com/kufu/smarthr-ui/commit/6afa0b4ff4acb84a5ce47a0958f715707b44b4fe))


* drop IndexNav component ([#2917](https://github.com/kufu/smarthr-ui/issues/2917)) ([d2a78d5](https://github.com/kufu/smarthr-ui/commit/d2a78d5a7918ed2f780cd44276c7a23f3571e106))

## [23.6.0](https://github.com/kufu/smarthr-ui/compare/v23.5.0...v23.6.0) (2022-11-15)


### Features

* comboboxのドロップダウンメニューリスト内にヒントを設置できるオプションを追加 ([#2896](https://github.com/kufu/smarthr-ui/issues/2896)) ([7c5babf](https://github.com/kufu/smarthr-ui/commit/7c5babf4ac3a4f587374f9ffb83cf5d979b3f5d4))
* DropdownButton に disabled な理由を渡せるようにする ([#2910](https://github.com/kufu/smarthr-ui/issues/2910)) ([917227e](https://github.com/kufu/smarthr-ui/commit/917227eade7faa45a9b776e828ec79a0d219f708))
* faRegClockアイコンを追加 ([#2911](https://github.com/kufu/smarthr-ui/issues/2911)) ([d390e2f](https://github.com/kufu/smarthr-ui/commit/d390e2f7132277441394cffc5bf6092a28221b84))
* single combo box に prefix optionを追加する ([#2899](https://github.com/kufu/smarthr-ui/issues/2899)) ([7dd1169](https://github.com/kufu/smarthr-ui/commit/7dd1169385f9527f262b249cd5e6c2ac4bf92e79))


### Bug Fixes

* DatePicker に invalidな日付文字列が渡された場合の動作を修正する ([#2876](https://github.com/kufu/smarthr-ui/issues/2876)) ([1741524](https://github.com/kufu/smarthr-ui/commit/1741524d0deeb1a697c7667e5a202e28e16b5c7f))
* hooksの設定漏れを修正する ([#2897](https://github.com/kufu/smarthr-ui/issues/2897)) ([5df553e](https://github.com/kufu/smarthr-ui/commit/5df553e34f2656b58dfbe1d042ca9a075673d1ee))
* Tooltip のフォーカスリングを SmartHR UI 化 ([#2900](https://github.com/kufu/smarthr-ui/issues/2900)) ([74d44d6](https://github.com/kufu/smarthr-ui/commit/74d44d674548993015153f66c2c67317d8495cd8))

## [23.5.0](https://github.com/kufu/smarthr-ui/compare/v23.4.1...v23.5.0) (2022-11-08)


### Features

* add defaultItem option for single-combo-box ([#2858](https://github.com/kufu/smarthr-ui/issues/2858)) ([bb1ce1c](https://github.com/kufu/smarthr-ui/commit/bb1ce1cdb70775eab27dca23c081590d6391831c))


### Bug Fixes

* ButtonWrapper に渡していた loading を Transient Props に変更 ([#2883](https://github.com/kufu/smarthr-ui/issues/2883)) ([c19d180](https://github.com/kufu/smarthr-ui/commit/c19d180b62b4061dff13f4a5a8f4e6589a1d3b73))
* フォーカススタイルにユーザー指定の OUTLINE を反映 ([#2875](https://github.com/kufu/smarthr-ui/issues/2875)) ([39b749a](https://github.com/kufu/smarthr-ui/commit/39b749a15055af139d767f06bf546c680eff6fa3))

### [23.4.1](https://github.com/kufu/smarthr-ui/compare/v23.4.0...v23.4.1) (2022-11-04)


### Bug Fixes

* Button with Loader が ThemeProvider 前提になっていたので修正 ([#2879](https://github.com/kufu/smarthr-ui/issues/2879)) ([6eadea4](https://github.com/kufu/smarthr-ui/commit/6eadea404f77d2d0dc553587d51c51ba88ef856f))

## [23.4.0](https://github.com/kufu/smarthr-ui/compare/v23.3.0...v23.4.0) (2022-11-01)


### Features

* Button に処理中の状態を追加 ([#2774](https://github.com/kufu/smarthr-ui/issues/2774)) ([53532bc](https://github.com/kufu/smarthr-ui/commit/53532bccf956c16dae5c98d669821fa9cca65927))


### Bug Fixes

* Icon with Text の複数行表示を修正 ([#2859](https://github.com/kufu/smarthr-ui/issues/2859)) ([9118737](https://github.com/kufu/smarthr-ui/commit/91187378e37c93570cef8e33a3291c05edb7e1c6))
* InformationPanel のスタイリングを微調整 ([#2819](https://github.com/kufu/smarthr-ui/issues/2819)) ([7f5d0a0](https://github.com/kufu/smarthr-ui/commit/7f5d0a025980553746a6a892de19a5df4abcbacb))
* InputFile のフォーカススタイルをクラス名で行わないように修正 ([#2862](https://github.com/kufu/smarthr-ui/issues/2862)) ([7f2da44](https://github.com/kufu/smarthr-ui/commit/7f2da44794814d6cc795f75399b7aaed563af15d))
* Text の color が DOM に反映されないように修正 ([#2863](https://github.com/kufu/smarthr-ui/issues/2863)) ([90fd351](https://github.com/kufu/smarthr-ui/commit/90fd3510821db6fc39482ec9a60e5cb8909263af))

## [23.3.0](https://github.com/kufu/smarthr-ui/compare/v23.2.0...v23.3.0) (2022-10-25)


### Features

* Base に余白のデザイントークンを渡せるようにする ([#2839](https://github.com/kufu/smarthr-ui/issues/2839)) ([a5b5440](https://github.com/kufu/smarthr-ui/commit/a5b5440c0ae77aa4c193786facd0d01036167db7))
* NotificationBar にスライドインアニメーションを追加 ([#2842](https://github.com/kufu/smarthr-ui/issues/2842)) ([985d521](https://github.com/kufu/smarthr-ui/commit/985d521fcc63b1acaa9f52cc267ffda437cf2508))


### Bug Fixes

* `ModelessDialog` を画面上部の境界外にドラッグ&ドロップできないようにする ([#2843](https://github.com/kufu/smarthr-ui/issues/2843)) ([48d98b7](https://github.com/kufu/smarthr-ui/commit/48d98b7846a6fa43ffbcca3aec1bd41535f2635f))
* disabled な DropdownButton で onClick が発火してしまう問題を修正 ([#2840](https://github.com/kufu/smarthr-ui/issues/2840)) ([e005994](https://github.com/kufu/smarthr-ui/commit/e005994aa7ac9ba2d74b53af0d21dfd15524440f))
* SmartHR Logo を最新化 ([#2838](https://github.com/kufu/smarthr-ui/issues/2838)) ([162475b](https://github.com/kufu/smarthr-ui/commit/162475b51a8721a0b64ef39b5c1fe0ca873f9a35))
* ヘルプセンターのURLを置き換え ([#2844](https://github.com/kufu/smarthr-ui/issues/2844)) ([174808a](https://github.com/kufu/smarthr-ui/commit/174808a36f9e2fe1c0d9b8f15fefeeb2f7c4302d))

## [23.2.0](https://github.com/kufu/smarthr-ui/compare/v23.1.0...v23.2.0) (2022-10-18)


### Features

* Loader に alt を追加 ([#2824](https://github.com/kufu/smarthr-ui/issues/2824)) ([65d8561](https://github.com/kufu/smarthr-ui/commit/65d856160942bcfb97b22675d983ce6e09d59422))
* SearchInput を追加｜SHRUI-608 ([#2807](https://github.com/kufu/smarthr-ui/issues/2807)) ([ef0d3f3](https://github.com/kufu/smarthr-ui/commit/ef0d3f375b506cbef4ce61e38b011ac97c9c6ad0))


### Bug Fixes

* DropDownButtonのlabelにReactNodeを渡せるよう修正 ([#2816](https://github.com/kufu/smarthr-ui/issues/2816)) ([5678318](https://github.com/kufu/smarthr-ui/commit/5678318d7f8236b19860aa5bd865d9709afa0301))

## [23.1.0](https://github.com/kufu/smarthr-ui/compare/v23.0.2...v23.1.0) (2022-10-11)


### Features

* add compressalt icon and expandalt icon ([#2773](https://github.com/kufu/smarthr-ui/issues/2773)) ([b43c4b3](https://github.com/kufu/smarthr-ui/commit/b43c4b3656a36a34edb726516fee62c26c547df0))
* datepicker calendar range ([#2754](https://github.com/kufu/smarthr-ui/issues/2754)) ([e87f1ef](https://github.com/kufu/smarthr-ui/commit/e87f1efb19ca1138e4237a53f0ea7583281dda37))
* Dialog タイトルのデフォルトを h2 に統一｜SHRUI-572 ([#2805](https://github.com/kufu/smarthr-ui/issues/2805)) ([175dea9](https://github.com/kufu/smarthr-ui/commit/175dea98b1a1a37c5ee09bca8e23f9a76204e543))


### Bug Fixes

* FilterDropDownのボタンにReactNodeを渡せるように修正 ([#2755](https://github.com/kufu/smarthr-ui/issues/2755)) ([14b65f5](https://github.com/kufu/smarthr-ui/commit/14b65f501a394f37774af79f8dbd9df919d7e0dd))
* Select の width を初期値 auto に変更 ([#2806](https://github.com/kufu/smarthr-ui/issues/2806)) ([f402cc1](https://github.com/kufu/smarthr-ui/commit/f402cc11354497b5c9cd1d36d12e7d8d20f7a432))

### [23.0.2](https://github.com/kufu/smarthr-ui/compare/v23.0.1...v23.0.2) (2022-09-14)


### Bug Fixes

* DefinitionListItem の破線を折返しがあっても下端で揃える ([#2758](https://github.com/kufu/smarthr-ui/issues/2758)) ([6ebb0bb](https://github.com/kufu/smarthr-ui/commit/6ebb0bbeabafc8d6d4aff6e88eae8927176f00f6))

### [23.0.1](https://github.com/kufu/smarthr-ui/compare/v23.0.0...v23.0.1) (2022-09-07)


### Bug Fixes

* eslintのruleを適用する ([#2743](https://github.com/kufu/smarthr-ui/issues/2743)) ([9a905c3](https://github.com/kufu/smarthr-ui/commit/9a905c35b60ff89b669d591999d15dc33a8ad799))

## [23.0.0](https://github.com/kufu/smarthr-ui/compare/v22.4.1...v23.0.0) (2022-08-29)


### ⚠ BREAKING CHANGES

* BlankImage を削除 (#2729)
* DefinitionList の description に空文字を許容させる｜SHRUI-601 (#2727)
* FloatAreaにfixed propsを追加 | SHRUI-574 (#2728)
* 画像系コンポーネントの title,  visuallyHiddenText など、 代替テキストが期待される属性を altに変更する (#2723)

### Features

* DefinitionList の description に空文字を許容させる｜SHRUI-601 ([#2727](https://github.com/kufu/smarthr-ui/issues/2727)) ([a1eefe3](https://github.com/kufu/smarthr-ui/commit/a1eefe3e8ec333a765d6b113291b7514b400da40))
* 画像系コンポーネントの title,  visuallyHiddenText など、 代替テキストが期待される属性を altに変更する ([#2723](https://github.com/kufu/smarthr-ui/issues/2723)) ([181b40d](https://github.com/kufu/smarthr-ui/commit/181b40df75c72d758afda0c8771b145166818243))


### Bug Fixes

* BlankImage を削除 ([#2729](https://github.com/kufu/smarthr-ui/issues/2729)) ([382b5a2](https://github.com/kufu/smarthr-ui/commit/382b5a294320a5b169fae061ff54da854bd2a71d))
* FloatAreaにfixed propsを追加 | SHRUI-574 ([#2728](https://github.com/kufu/smarthr-ui/issues/2728)) ([5604b53](https://github.com/kufu/smarthr-ui/commit/5604b5319e10cbb2c36b3026d258a9eb6a1f9df4))

### [22.4.1](https://github.com/kufu/smarthr-ui/compare/v22.4.0...v22.4.1) (2022-08-23)


### Bug Fixes

* ロゴのアイソレーション実装が過剰だったので消す ([#2712](https://github.com/kufu/smarthr-ui/issues/2712)) ([820e3ee](https://github.com/kufu/smarthr-ui/commit/820e3ee61d40d21dc5847ec8065c71e2c8fbeb14))

## [22.4.0](https://github.com/kufu/smarthr-ui/compare/v22.3.0...v22.4.0) (2022-08-17)


### Features

* Icon に可視テキストを渡せるようにする ([#2685](https://github.com/kufu/smarthr-ui/issues/2685)) ([30157ef](https://github.com/kufu/smarthr-ui/commit/30157ef582262c7be53d95664f5672f4a05db742))


### Bug Fixes

* Button と AnchorButton から不要な ref の詰め替えを消す ([#2706](https://github.com/kufu/smarthr-ui/issues/2706)) ([f1c4524](https://github.com/kufu/smarthr-ui/commit/f1c45245c596abc9608046d00162c8fe2ac609c4))
* FloatArea の top と bottom に string を渡せるようする ([#2696](https://github.com/kufu/smarthr-ui/issues/2696)) ([5aae8df](https://github.com/kufu/smarthr-ui/commit/5aae8dfbf4f57fae61fae0dd0dba02f0c3462d67))

## [22.3.0](https://github.com/kufu/smarthr-ui/compare/v22.2.1...v22.3.0) (2022-08-08)


### Features

* DropDownButtonのchildrenの型に `null | boolean` を追加する   SHRUI-586 ([#2679](https://github.com/kufu/smarthr-ui/issues/2679)) ([7b0200f](https://github.com/kufu/smarthr-ui/commit/7b0200f2ed936463b4194244339f5000af3c60e1))
* DropZone を単一ファイル選択でも使えるようにする ([#2686](https://github.com/kufu/smarthr-ui/issues/2686)) ([fb2fa68](https://github.com/kufu/smarthr-ui/commit/fb2fa689ef9ef9118b36f438e462c669f33f34a2))


### Bug Fixes

* 入力要素の disabled 装飾を Button に合わせる ([#2670](https://github.com/kufu/smarthr-ui/issues/2670)) ([dad3802](https://github.com/kufu/smarthr-ui/commit/dad38022d5673b5dbf9cbd0c03d760e221733f93))

### [22.2.1](https://github.com/kufu/smarthr-ui/compare/v22.2.0...v22.2.1) (2022-07-19)


### Bug Fixes

* Button[variant=secondary] の disabled に背景色を追加 ([#2656](https://github.com/kufu/smarthr-ui/issues/2656)) ([b362245](https://github.com/kufu/smarthr-ui/commit/b362245d61598f7c5190f9a7f832a7840c7dbc5f))
* WarningIcon が ThemeProvider 前提になっているのを修正 ([#2658](https://github.com/kufu/smarthr-ui/issues/2658)) ([5362561](https://github.com/kufu/smarthr-ui/commit/536256167a26439ead1034e9ee47999a6b7606ee))

## [22.2.0](https://github.com/kufu/smarthr-ui/compare/v22.1.0...v22.2.0) (2022-07-11)


### Features

* createRadiusに'L'と'FULL'を追加する ([#2642](https://github.com/kufu/smarthr-ui/issues/2642)) ([ae66fea](https://github.com/kufu/smarthr-ui/commit/ae66feaf50792e976de7b73ae7cfb4b39978af55))


### Bug Fixes

* Base の radius をデザイントークンに対応付け ([#2643](https://github.com/kufu/smarthr-ui/issues/2643)) ([b334e80](https://github.com/kufu/smarthr-ui/commit/b334e8008220b22c996161341ffe7ccb082e69a5))
* TextLink コンポーネントに ref を渡せるようにする ([#2646](https://github.com/kufu/smarthr-ui/issues/2646)) ([0edab22](https://github.com/kufu/smarthr-ui/commit/0edab2225b1b24eff938153ab3bba420f4a87746)), closes [#2633](https://github.com/kufu/smarthr-ui/issues/2633)

## [22.1.0](https://github.com/kufu/smarthr-ui/compare/v22.0.0...v22.1.0) (2022-07-05)


### Features

* Select にサイズ小を追加 ([#2600](https://github.com/kufu/smarthr-ui/issues/2600)) ([0fd4b28](https://github.com/kufu/smarthr-ui/commit/0fd4b280b5f70ddf16439cedb876a823cac8ab47))
* StatusLabel に type=green を追加 ([#2627](https://github.com/kufu/smarthr-ui/issues/2627)) ([de94ce7](https://github.com/kufu/smarthr-ui/commit/de94ce729ff315bdf5a8bbd63d87e075c52a729a))
* Textarea が入力に依って自動で広がるよう機能追加 ([#2598](https://github.com/kufu/smarthr-ui/issues/2598)) ([d518192](https://github.com/kufu/smarthr-ui/commit/d51819268d0d2fa936f3c67f8a5f97256db53e14))

## [22.0.0](https://github.com/kufu/smarthr-ui/compare/v21.4.1...v22.0.0) (2022-06-24)


### ⚠ BREAKING CHANGES

* 黄色の使い方と注意アイコンの使い方を見直す (#2578)

### Features

* 黄色の使い方と注意アイコンの使い方を見直す ([#2578](https://github.com/kufu/smarthr-ui/issues/2578)) ([f98dfaf](https://github.com/kufu/smarthr-ui/commit/f98dfaf2145473c5daabdffb5f3bb039b6deb180))


### Bug Fixes

* `Header` 関連コンポーネントの theme 参照の修正 ([#2604](https://github.com/kufu/smarthr-ui/issues/2604)) ([a2f7e32](https://github.com/kufu/smarthr-ui/commit/a2f7e32df5a2001155b6c601c78566ed3f4fa33d))
* change not to use DOMRect outside useEffect or handle ([#2596](https://github.com/kufu/smarthr-ui/issues/2596)) ([1ca6a10](https://github.com/kufu/smarthr-ui/commit/1ca6a102e5fc7d02b59d9aec3e0c572273b719da))
* fix combobox listbox partial rendering ([#2588](https://github.com/kufu/smarthr-ui/issues/2588)) ([dccc06d](https://github.com/kufu/smarthr-ui/commit/dccc06d872482fe7159aa5fa8f18086eccf0caee))
* fix reference of theme ([#2586](https://github.com/kufu/smarthr-ui/issues/2586)) ([139ab4e](https://github.com/kufu/smarthr-ui/commit/139ab4e8ebf7a7900814f195d73da9598c7b9b5b))
* SmartHRLogo が ThemeProvider 前提で書かれていたので修正 ([#2593](https://github.com/kufu/smarthr-ui/issues/2593)) ([df1e3c3](https://github.com/kufu/smarthr-ui/commit/df1e3c32d79e71b176b1e6e286fef28b12c924bf))
* ヘッダーが ThemeProvider 前提で書かれている箇所を useTheme を使うように修正 ([#2601](https://github.com/kufu/smarthr-ui/issues/2601)) ([62c26cb](https://github.com/kufu/smarthr-ui/commit/62c26cbfdc39375544e1d986fcf38db34be4a0f8))
* ボタンの displayName を明示的に設定 ([#2585](https://github.com/kufu/smarthr-ui/issues/2585)) ([87b09b0](https://github.com/kufu/smarthr-ui/commit/87b09b0309274d33a5965b246d3aad8ec68cd9a1))

### [21.4.5](https://github.com/kufu/smarthr-ui/compare/v21.4.4...v21.4.5) (2022-06-24)


### Bug Fixes

* `Header` の theme 参照修正のバックポート対応 ([#2605](https://github.com/kufu/smarthr-ui/issues/2605)) ([0a79803](https://github.com/kufu/smarthr-ui/commit/0a79803cc5ba27ab44a9230aa9db9c0e71768965))

### [21.4.4](https://github.com/kufu/smarthr-ui/compare/v21.4.3...v21.4.4) (2022-06-23)


### Bug Fixes

* ヘッダーが ThemeProvider 前提で書かれている箇所を useTheme を使うように修正 ([#2602](https://github.com/kufu/smarthr-ui/issues/2602)) ([7d0f105](https://github.com/kufu/smarthr-ui/commit/7d0f1051fa2d69a0b9942080a94edc9eceff8b87))

### [21.4.3](https://github.com/kufu/smarthr-ui/compare/v21.4.2...v21.4.3) (2022-06-20)


### Bug Fixes

* SmartHRLogo の Wrapper が ThemeProvider 前提で書かれていたので修正 ([#2594](https://github.com/kufu/smarthr-ui/issues/2594)) ([a9ce9cb](https://github.com/kufu/smarthr-ui/commit/a9ce9cbd85135d3f7aed38294c78f77f53d99608))

### [21.4.2](https://github.com/kufu/smarthr-ui/compare/v21.4.1...v21.4.2) (2022-06-17)


### Bug Fixes

* fix combobox listbox partial rendering ([#2589](https://github.com/kufu/smarthr-ui/issues/2589)) ([5e73d80](https://github.com/kufu/smarthr-ui/commit/5e73d806683af5161de5c8e25923647357984901))
* fix reference of theme ([#2586](https://github.com/kufu/smarthr-ui/issues/2586)) ([139ab4e](https://github.com/kufu/smarthr-ui/commit/139ab4e8ebf7a7900814f195d73da9598c7b9b5b))
* ボタンの displayName を明示的に設定 ([#2585](https://github.com/kufu/smarthr-ui/issues/2585)) ([87b09b0](https://github.com/kufu/smarthr-ui/commit/87b09b0309274d33a5965b246d3aad8ec68cd9a1))

### [21.4.1](https://github.com/kufu/smarthr-ui/compare/v21.4.0...v21.4.1) (2022-06-15)


### Bug Fixes

* `pxToRem` を置き換え ([#2551](https://github.com/kufu/smarthr-ui/issues/2551)) ([6fc6ed9](https://github.com/kufu/smarthr-ui/commit/6fc6ed9768212e992659dbb455762bfae1039071))
* change not to import from top index ([#2581](https://github.com/kufu/smarthr-ui/issues/2581)) ([33ed5c7](https://github.com/kufu/smarthr-ui/commit/33ed5c74168623c2077e9599820ebc367563ae3f))

## [21.4.0](https://github.com/kufu/smarthr-ui/compare/v21.3.0...v21.4.0) (2022-06-14)


### Features

* spacingByChar の alias として space を追加｜SHRUI-568 ([#2553](https://github.com/kufu/smarthr-ui/issues/2553)) ([949978f](https://github.com/kufu/smarthr-ui/commit/949978f3eaac2b832a817fa735c7a404230d4bcb))


### Bug Fixes

* `Select` 内部のテキスト上端が見きれないように修正 (SHRUI-569) ([#2548](https://github.com/kufu/smarthr-ui/issues/2548)) ([c7fdc6a](https://github.com/kufu/smarthr-ui/commit/c7fdc6a3dccaca0e70cf32b8932a3d734b970bfd))
* fix InformationPanel props not to duplicate element props ([#2550](https://github.com/kufu/smarthr-ui/issues/2550)) ([ebf370e](https://github.com/kufu/smarthr-ui/commit/ebf370eb76ad559abf045a5facf1a3f9c4babaf9))
* Header に className を渡す ([#2552](https://github.com/kufu/smarthr-ui/issues/2552)) ([83e4a57](https://github.com/kufu/smarthr-ui/commit/83e4a57f87c7133c1cc447b075ec309b09863bbb))
* React 18 以降であれば ID 生成に `React.useId` を使うように変更 ([#2545](https://github.com/kufu/smarthr-ui/issues/2545)) ([29b4295](https://github.com/kufu/smarthr-ui/commit/29b42950d362a4bf83738a529d43d45904c9410a))
* useEffect 外で document を参照しないようにする ([#2539](https://github.com/kufu/smarthr-ui/issues/2539)) ([bfd6e19](https://github.com/kufu/smarthr-ui/commit/bfd6e19184d19a4398b83f51bb4409eaff33d4b2))

## [21.3.0](https://github.com/kufu/smarthr-ui/compare/v21.2.0...v21.3.0) (2022-06-07)


### Features

* Header を追加｜SHRUI-346 ([#2536](https://github.com/kufu/smarthr-ui/issues/2536)) ([3266007](https://github.com/kufu/smarthr-ui/commit/326600773b2c793388827ed862fcec9e209865b2))


### Bug Fixes

* `NotificationBar` の右寄せ部分にエスケープハッチを追加 (SHRUI-555) ([#2469](https://github.com/kufu/smarthr-ui/issues/2469)) ([239c6e4](https://github.com/kufu/smarthr-ui/commit/239c6e494ba52cbc7b53c28fbc470339b8502729))
* apply forwardRef to Button and AnchorButton ([#2540](https://github.com/kufu/smarthr-ui/issues/2540)) ([4378f51](https://github.com/kufu/smarthr-ui/commit/4378f51342fba32a35ca09ac513cd9417a165402))
* set Button default type to 'button' ([#2542](https://github.com/kufu/smarthr-ui/issues/2542)) ([fa94faf](https://github.com/kufu/smarthr-ui/commit/fa94faf7686200bb22638a7ba24d7b5e67744962))
* ドロップダウンのフォーカス制御の修正 ([#2535](https://github.com/kufu/smarthr-ui/issues/2535)) ([fe45084](https://github.com/kufu/smarthr-ui/commit/fe45084e71e1537eb4ae5da3dcab6c0c1e6acad6))
* フォーカスリングが見きれないように修正 (SHRUI-565) ([#2537](https://github.com/kufu/smarthr-ui/issues/2537)) ([9fb9dfd](https://github.com/kufu/smarthr-ui/commit/9fb9dfd42932f64f939383eab666ced5e3e1af66))

## [21.2.0](https://github.com/kufu/smarthr-ui/compare/v21.1.0...v21.2.0) (2022-05-30)


### Features

* DropdownButton を追加 ([#2516](https://github.com/kufu/smarthr-ui/issues/2516)) ([360a4d4](https://github.com/kufu/smarthr-ui/commit/360a4d41633d30d37c9d35153fddd9bb38d978da))
* Storybookにcontrols addonを追加 ([#2488](https://github.com/kufu/smarthr-ui/issues/2488)) ([334e612](https://github.com/kufu/smarthr-ui/commit/334e612139901ef2abc17b97ca9b17e803fe00fb))


### Bug Fixes

* CheckBox と RadioButton で static className があたってしまうのを修正 ([#2515](https://github.com/kufu/smarthr-ui/issues/2515)) ([505eedb](https://github.com/kufu/smarthr-ui/commit/505eedbe7afe57edbbcd1cfb9398e59261283e5e))
* ライブラリの動作に必要ない jest-environment-jsdom を devDependencies に移動 ([#2514](https://github.com/kufu/smarthr-ui/issues/2514)) ([2a30e97](https://github.com/kufu/smarthr-ui/commit/2a30e975c69b0965784b651b77eac404c97ff6d1))

## [21.1.0](https://github.com/kufu/smarthr-ui/compare/v21.0.0...v21.1.0) (2022-05-23)


### Features

* `Icon` の size を string で指定できるように変更 (SHRUI-559) ([#2481](https://github.com/kufu/smarthr-ui/issues/2481)) ([3cd7ef5](https://github.com/kufu/smarthr-ui/commit/3cd7ef52234a3d07c5dd22c40ae5482428c946b8))
* `Th`, `Td` コンポーネントを追加 (SHRUI-557) ([#2471](https://github.com/kufu/smarthr-ui/issues/2471)) ([4bd8270](https://github.com/kufu/smarthr-ui/commit/4bd8270af711025ffefaa5928247753bb0679b18))
* ActionDialog と MessageDialog の良いデフォルトを実装 ([#2489](https://github.com/kufu/smarthr-ui/issues/2489)) ([e15d78d](https://github.com/kufu/smarthr-ui/commit/e15d78d6d2fa968985711eead91444931563ac25))
* add new icon, fa-reg-light-bulb ([#2486](https://github.com/kufu/smarthr-ui/issues/2486)) ([23bea0c](https://github.com/kufu/smarthr-ui/commit/23bea0c5e3fd04649f6df789e1e9cde111e9a3b3))
* ダイアログにおいて最初にフォーカスする要素を指定できるようにする (SHRUI-562) ([#2485](https://github.com/kufu/smarthr-ui/issues/2485)) ([c14ec72](https://github.com/kufu/smarthr-ui/commit/c14ec72e0023158ccb948f4c8be603431194269a))
* 色のデザイントークンを整理｜SHRUI-560 ([#2447](https://github.com/kufu/smarthr-ui/issues/2447)) ([8c9bb71](https://github.com/kufu/smarthr-ui/commit/8c9bb71adf7c478348a862b5ed138e25d4af01e9))

## [21.0.0](https://github.com/kufu/smarthr-ui/compare/v20.4.0...v21.0.0) (2022-05-09)


### ⚠ BREAKING CHANGES

* `InputFile` のファイル選択の制御方法を変更 (#2440)
* `SmartHRLogo` の I/F 変更 (SHRUI-551) (#2446)
* props の typo を修正 (#2448)

### Features

* `Button`, `AnchorButton` コンポーネントを追加 (SHRUI-545) ([#2443](https://github.com/kufu/smarthr-ui/issues/2443)) ([98bedf6](https://github.com/kufu/smarthr-ui/commit/98bedf663a9b537d05c1d133d89f78dfd7bc9693))
* `InputFile` のファイル選択の制御方法を変更 ([#2440](https://github.com/kufu/smarthr-ui/issues/2440)) ([dc62eb6](https://github.com/kufu/smarthr-ui/commit/dc62eb60420a5479a10ac19fd18ed0c53e09b517))
* DatePickerで別フォーマット日付の併記をサポートしたい ([#2242](https://github.com/kufu/smarthr-ui/issues/2242)) ([3fcf128](https://github.com/kufu/smarthr-ui/commit/3fcf12893df7d625586d9a3ffc60a32b43088b82)), closes [/github.com/kufu/smarthr-ui/pull/2242#discussion_r800413336](https://github.com/kufu//github.com/kufu/smarthr-ui/pull/2242/issues/discussion_r800413336) [/github.com/kufu/smarthr-ui/pull/2242#discussion_r857246590](https://github.com/kufu//github.com/kufu/smarthr-ui/pull/2242/issues/discussion_r857246590) [/github.com/kufu/smarthr-ui/pull/2242#discussion_r857246886](https://github.com/kufu//github.com/kufu/smarthr-ui/pull/2242/issues/discussion_r857246886) [/github.com/kufu/smarthr-ui/pull/2242#discussion_r857250131](https://github.com/kufu//github.com/kufu/smarthr-ui/pull/2242/issues/discussion_r857250131)


### Bug Fixes

* `SmartHRLogo` の I/F 変更 (SHRUI-551) ([#2446](https://github.com/kufu/smarthr-ui/issues/2446)) ([0a4487f](https://github.com/kufu/smarthr-ui/commit/0a4487ffdfac45ec0eafa665b6115e71682fd915))
* `Tooltip` のメッセージがスクリーンリーダーで読めるように修正 (SHRUI-556) ([#2468](https://github.com/kufu/smarthr-ui/issues/2468)) ([3e6b7bc](https://github.com/kufu/smarthr-ui/commit/3e6b7bc094ebf5957470bfffc1df04a7d8a9f166))
* props の typo を修正 ([#2448](https://github.com/kufu/smarthr-ui/issues/2448)) ([45cfd69](https://github.com/kufu/smarthr-ui/commit/45cfd6971fd90694945fc93f909d1a8f91048ba2))

## [20.4.0](https://github.com/kufu/smarthr-ui/compare/v20.3.0...v20.4.0) (2022-04-25)


### Features

* :focus を :focus-visible に置き換える ([#2442](https://github.com/kufu/smarthr-ui/issues/2442)) ([34d27de](https://github.com/kufu/smarthr-ui/commit/34d27def8fb02c54627379ad8b4d673d6aaa784b))


### Bug Fixes

* NotificationBar の閉じるボタンが縮まないように修正 ([#2441](https://github.com/kufu/smarthr-ui/issues/2441)) ([2ff5ffc](https://github.com/kufu/smarthr-ui/commit/2ff5ffc1e8678020b3f60e54e2c02de25db654f2))

## [20.3.0](https://github.com/kufu/smarthr-ui/compare/v20.2.1...v20.3.0) (2022-04-18)


### Features

* use ReactNode for i18n ([#2428](https://github.com/kufu/smarthr-ui/issues/2428)) ([a50cb2f](https://github.com/kufu/smarthr-ui/commit/a50cb2f48f2897bfa5516e96c49f8d1a7e0e16c2))

### [20.2.1](https://github.com/kufu/smarthr-ui/compare/v20.2.0...v20.2.1) (2022-04-14)


### Bug Fixes

* fix timing of appending portal ([#2424](https://github.com/kufu/smarthr-ui/issues/2424)) ([29cd62a](https://github.com/kufu/smarthr-ui/commit/29cd62afd113c840b81abeef3326e583c774ba61))
* ダイアログのフォーカストラップを抜けてしまう問題を修正 ([#2404](https://github.com/kufu/smarthr-ui/issues/2404)) ([91c3b90](https://github.com/kufu/smarthr-ui/commit/91c3b90721c33bbcb9d1a8d0d50561873cf4c356))

## [20.2.0](https://github.com/kufu/smarthr-ui/compare/v20.1.2...v20.2.0) (2022-04-12)


### Features

* string to ReactNode ([#2400](https://github.com/kufu/smarthr-ui/issues/2400)) ([200947d](https://github.com/kufu/smarthr-ui/commit/200947dd4483e6171c61c35c1753763d3828a12f))


### Bug Fixes

* ダイアログのポータルが DOM に追加される前に子のライフサイクルが開始されないように修正 ([#2403](https://github.com/kufu/smarthr-ui/issues/2403)) ([062a564](https://github.com/kufu/smarthr-ui/commit/062a5645cbebccf25f0de7ef4e1113e764379066))

### [20.1.2](https://github.com/kufu/smarthr-ui/compare/v20.1.1...v20.1.2) (2022-04-06)


### Bug Fixes

* ballonのtriangleがretinaディスプレイなどで条件が揃うと表示崩れするバグを修正 ([#2399](https://github.com/kufu/smarthr-ui/issues/2399)) ([2d41e03](https://github.com/kufu/smarthr-ui/commit/2d41e0357f9ac2ca413d7733cf22ae95cabe75b0))

### [20.1.1](https://github.com/kufu/smarthr-ui/compare/v20.1.0...v20.1.1) (2022-03-30)


### Bug Fixes

* `TabBar` のモバイル表示調整 (SHRUI-539) ([#2358](https://github.com/kufu/smarthr-ui/issues/2358)) ([f3f658b](https://github.com/kufu/smarthr-ui/commit/f3f658baf14fbe5ad51384fcc57fde405a00796e))

## [20.1.0](https://github.com/kufu/smarthr-ui/compare/v20.0.0...v20.1.0) (2022-03-17)


### Features

* add Reel component ([#2345](https://github.com/kufu/smarthr-ui/issues/2345)) ([2b14f5b](https://github.com/kufu/smarthr-ui/commit/2b14f5b64dec8d313af1691ccc5483ebe30795d7))


### Bug Fixes

* `Dropdown` のモバイル表示調整 (SHRUI-536) ([#2325](https://github.com/kufu/smarthr-ui/issues/2325)) ([4f95c3f](https://github.com/kufu/smarthr-ui/commit/4f95c3feb9d19402dfa92826181a71b3982c400d))
* add Reel wrapper to Pagination ([#2350](https://github.com/kufu/smarthr-ui/issues/2350)) ([c28baaa](https://github.com/kufu/smarthr-ui/commit/c28baaa88b584a5ad388044b7691e57928e7ad45))
* Balloon の三角形関連のスタイルを改善 ([#2348](https://github.com/kufu/smarthr-ui/issues/2348)) ([ab1a65c](https://github.com/kufu/smarthr-ui/commit/ab1a65c0624775fab3e07883228aea45d92a800b))

## [20.0.0](https://github.com/kufu/smarthr-ui/compare/v19.1.0...v20.0.0) (2022-03-08)


### ⚠ BREAKING CHANGES

* `Footer` コンポーネントを削除 (SHRUI-525) (#2320)
* ダイアログのデフォルト幅を変更 (SHRUI-535) (#2300)

### Features

* ダイアログのデフォルト幅を変更 (SHRUI-535) ([#2300](https://github.com/kufu/smarthr-ui/issues/2300)) ([3dfa93d](https://github.com/kufu/smarthr-ui/commit/3dfa93d4abdb253e937b9939ee3b62e4d5ba50c2))


### Bug Fixes

* `Footer` コンポーネントを削除 (SHRUI-525) ([#2320](https://github.com/kufu/smarthr-ui/issues/2320)) ([0faca49](https://github.com/kufu/smarthr-ui/commit/0faca497050004a8f722377107f560da4a472e38))
* change type of text props to ReactNode ([#2327](https://github.com/kufu/smarthr-ui/issues/2327)) ([0f6b58a](https://github.com/kufu/smarthr-ui/commit/0f6b58a6cf0ad5d6a220ee3ea9b75ad3f776fe3d))
* ダイアログのフェードアニメーション中にDOMが更新されてちらつくのを防ぎたい ([#2319](https://github.com/kufu/smarthr-ui/issues/2319)) ([42945d0](https://github.com/kufu/smarthr-ui/commit/42945d0f1b446aba4d1023bfeafda5d4e7a22e70))

## [19.1.0](https://github.com/kufu/smarthr-ui/compare/v19.0.2...v19.1.0) (2022-03-03)


### Features

* change to ReactNode for i18n ([#2321](https://github.com/kufu/smarthr-ui/issues/2321)) ([773e522](https://github.com/kufu/smarthr-ui/commit/773e5228c9c5d25ca80f66ea4eb1002b59cd7f24))


### Bug Fixes

* InformationPanel の内部処理を memo 化 ([#2315](https://github.com/kufu/smarthr-ui/issues/2315)) ([3255546](https://github.com/kufu/smarthr-ui/commit/3255546c2971cf6030728d9fe287d561f7e18c29))

### [19.0.2](https://github.com/kufu/smarthr-ui/compare/v19.0.1...v19.0.2) (2022-02-28)


### Bug Fixes

* `BottomFixedArea` のモバイル表示調整 ([#2285](https://github.com/kufu/smarthr-ui/issues/2285)) ([ff5989c](https://github.com/kufu/smarthr-ui/commit/ff5989c4e59a638f23d952622a6a59559d5d6ac5))
* ComboBoxItem を Storybook や SmartHR Design System での Props 表示のために、よりわかりやすい名前に変える ([#2299](https://github.com/kufu/smarthr-ui/issues/2299)) ([b715b60](https://github.com/kufu/smarthr-ui/commit/b715b600e939539ac76202adf401252b24379694))
* workaround empty flex gap bug ([#2298](https://github.com/kufu/smarthr-ui/issues/2298)) ([0bb4ff5](https://github.com/kufu/smarthr-ui/commit/0bb4ff562859bb9776870a8f31e32999fd97a45c))

### [19.0.1](https://github.com/kufu/smarthr-ui/compare/v19.0.0...v19.0.1) (2022-02-22)


### Bug Fixes

* `AppNavi` のアイテムのテキストが折り返されないように修正 ([#2283](https://github.com/kufu/smarthr-ui/issues/2283)) ([a58b2ac](https://github.com/kufu/smarthr-ui/commit/a58b2ac0c66d778cb631f6c4cdc79aa643218e03))
* disabled なボタンに表示するツールチップが正常に動作するように修正 (SHRUI-529) ([#2280](https://github.com/kufu/smarthr-ui/issues/2280)) ([7bdbfb2](https://github.com/kufu/smarthr-ui/commit/7bdbfb2f58f6d47e03717ed9c5549ab42109a891))
* fix ModelessDialog to be able to close on mobile ([#2279](https://github.com/kufu/smarthr-ui/issues/2279)) ([0f89dba](https://github.com/kufu/smarthr-ui/commit/0f89dba82328db0ff2bcc50d2f84e3a525163fa4))
* コンボボックスのドロップダウンに表示するオプション数を段階的に増やすように変更 (SHRUI-540) ([#2263](https://github.com/kufu/smarthr-ui/issues/2263)) ([33251bf](https://github.com/kufu/smarthr-ui/commit/33251bf20bda02981a5fa1f56fc95e65594f4d09))

## [19.0.0](https://github.com/kufu/smarthr-ui/compare/v18.0.0...v19.0.0) (2022-02-17)


### ⚠ BREAKING CHANGES

* smarthr-uiにおけるエラーアイコンを `FaExclamationCircleIcon` に統一する (#2240)

### Features

* smarthr-uiにおけるエラーアイコンを `FaExclamationCircleIcon` に統一する ([#2240](https://github.com/kufu/smarthr-ui/issues/2240)) ([8e3da84](https://github.com/kufu/smarthr-ui/commit/8e3da8465424e3bf296f1dbccce280e70a7970fd))


### Bug Fixes

* change not to use lookbehind regular expression ([#2264](https://github.com/kufu/smarthr-ui/issues/2264)) ([5c6918c](https://github.com/kufu/smarthr-ui/commit/5c6918ce8cffc4606b1df5c101b7f51f1ebedbce))
* make `<Text>` as props like a styled-components ([#2261](https://github.com/kufu/smarthr-ui/issues/2261)) ([9105024](https://github.com/kufu/smarthr-ui/commit/91050248bc9e2b5e28cf7724b28a7e6cb9fa53f0))
* NotificationBar の useMemo dependency 漏れを追記 ([#2239](https://github.com/kufu/smarthr-ui/issues/2239)) ([fb0c56f](https://github.com/kufu/smarthr-ui/commit/fb0c56f7238e94a0d86a3644dcc7118bf4528270))
* style of `defaultChecked` ([#2259](https://github.com/kufu/smarthr-ui/issues/2259)) ([dd6486b](https://github.com/kufu/smarthr-ui/commit/dd6486bb7b5b2dadd4a185609c02a6f357e0d3b9))

## [18.0.0](https://github.com/kufu/smarthr-ui/compare/v17.3.0...v18.0.0) (2022-02-08)


### ⚠ BREAKING CHANGES

* remove gap fallback from `<Cluster>` (#2218)

### Features

* add `yarn build-stylesheet` command ([#2128](https://github.com/kufu/smarthr-ui/issues/2128)) ([5cae94b](https://github.com/kufu/smarthr-ui/commit/5cae94bec37115ec712082d38ee0dac098d3a382))
* remove gap fallback from `<Cluster>` ([#2218](https://github.com/kufu/smarthr-ui/issues/2218)) ([fd5b680](https://github.com/kufu/smarthr-ui/commit/fd5b68083281cd7a8bb65072caa17ac878d1f448))


### Bug Fixes

* Input の useMemo 記述漏れ依存配列を追記 ([#2236](https://github.com/kufu/smarthr-ui/issues/2236)) ([d8efab5](https://github.com/kufu/smarthr-ui/commit/d8efab58b9f3f19eac861b00e8c2f5bd8235fdb4))
* マイナス値でも先頭の0が除去されるようにしたい ([#2241](https://github.com/kufu/smarthr-ui/issues/2241)) ([2a0e205](https://github.com/kufu/smarthr-ui/commit/2a0e20528de0f62511045b6b292c99b0eaa847d3))

## [17.3.0](https://github.com/kufu/smarthr-ui/compare/v17.2.0...v17.3.0) (2022-02-01)


### Features

* `Select` に `onChangeValue` を追加 (SHRUI-528) ([#2220](https://github.com/kufu/smarthr-ui/issues/2220)) ([471bbf8](https://github.com/kufu/smarthr-ui/commit/471bbf8e6f57557200a9f32d683455cf6569411e))
* InputFile にエラーオプションを追加 (SHRUI-486) ([#2197](https://github.com/kufu/smarthr-ui/issues/2197)) ([6189d37](https://github.com/kufu/smarthr-ui/commit/6189d3784ebd58f0cfe339c12dd7a3cc30822ba6))


### Bug Fixes

* BottomFixedArea のシャドウを調整する ([#2223](https://github.com/kufu/smarthr-ui/issues/2223)) ([a100e68](https://github.com/kufu/smarthr-ui/commit/a100e688dcae42eaaf26bbdeabc9646968c84e9c))
* Input[type=number] のスクロールで数値が変更されるのを防ぐ ([#2233](https://github.com/kufu/smarthr-ui/issues/2233)) ([a5c84a1](https://github.com/kufu/smarthr-ui/commit/a5c84a18a86e104021a0833e63f970996a16f697))
* NotificationBar の className に undefined が混じるバグを修正 ([#2222](https://github.com/kufu/smarthr-ui/issues/2222)) ([264cb73](https://github.com/kufu/smarthr-ui/commit/264cb7351b2e217efd7667a0cca908d4728b68f0))

## [17.2.0](https://github.com/kufu/smarthr-ui/compare/v17.1.0...v17.2.0) (2022-01-24)


### Features

* Change <ActionDialog>'s string props to ReactNode ([#2117](https://github.com/kufu/smarthr-ui/issues/2117)) ([bc325f1](https://github.com/kufu/smarthr-ui/commit/bc325f1c72cbce49968c5ad2ff61b7cae7455d1d))
* NotificationBar を作成｜SHRUI-508 ([#2193](https://github.com/kufu/smarthr-ui/issues/2193)) ([28ed290](https://github.com/kufu/smarthr-ui/commit/28ed290a77282748eaaedd4f7bd70640e046f805))

## [17.1.0](https://github.com/kufu/smarthr-ui/compare/v17.0.1...v17.1.0) (2022-01-17)


### Features

* add autoClose prop into FlashMessage ([#2168](https://github.com/kufu/smarthr-ui/issues/2168)) ([a0dd906](https://github.com/kufu/smarthr-ui/commit/a0dd90696d65a967c035651a486b50a2f1727655))


### Bug Fixes

* `InputFile` の DOM 構造を変更 (SHRUI-453) ([#2059](https://github.com/kufu/smarthr-ui/issues/2059)) ([f6def9f](https://github.com/kufu/smarthr-ui/commit/f6def9fc52c395722d88f09c414b42b62485194d))
* actionDialogのLoaderの表示崩れを修正 ([#2145](https://github.com/kufu/smarthr-ui/issues/2145)) ([a1ace9f](https://github.com/kufu/smarthr-ui/commit/a1ace9f66fb5605a2e323d4784a6a602bf2a6dc7))
* change layout of Footer to flex box ([#2181](https://github.com/kufu/smarthr-ui/issues/2181)) ([82b5c6a](https://github.com/kufu/smarthr-ui/commit/82b5c6abe630e63962bc2c89ba3950115f547df2))

### [17.0.1](https://github.com/kufu/smarthr-ui/compare/v17.0.0...v17.0.1) (2022-01-06)


### Bug Fixes

* change to prevent to fire onAdd when assigning to input.files ([#2165](https://github.com/kufu/smarthr-ui/issues/2165)) ([3c5e8f2](https://github.com/kufu/smarthr-ui/commit/3c5e8f24cf0fb977865fecf136d37789de34934e))
* fix broken layout of FlaotArea on mobile device ([#2164](https://github.com/kufu/smarthr-ui/issues/2164)) ([b72c43e](https://github.com/kufu/smarthr-ui/commit/b72c43edc1e28d8c5b2771e7e60c8deffd8eb757))

## [17.0.0](https://github.com/kufu/smarthr-ui/compare/v16.0.2...v17.0.0) (2021-12-21)


### ⚠ BREAKING CHANGES

* Light/Dark Balloon, Light/Dark Tooltip の削除 (SHRUI-464) (#2121)
* IE のサポートを終了する (SHRUI-505) (#2116)

### Features

* Change `<StatusLabel>`, `<AppNavi>`'s string props to ReactNode ([#2115](https://github.com/kufu/smarthr-ui/issues/2115)) ([a7d6bdc](https://github.com/kufu/smarthr-ui/commit/a7d6bdc4a664a140df078aaa2fa8af590ca5d186))
* コンボボックスが全半角大小文字を区別せずマッチするように変更 ([#2105](https://github.com/kufu/smarthr-ui/issues/2105)) ([5fb565e](https://github.com/kufu/smarthr-ui/commit/5fb565eab6c306d0933419702e321c9a4ba27110))


* IE のサポートを終了する (SHRUI-505) ([#2116](https://github.com/kufu/smarthr-ui/issues/2116)) ([d31ac97](https://github.com/kufu/smarthr-ui/commit/d31ac976789b915d8281491d5f92f89d036203f9))
* Light/Dark Balloon, Light/Dark Tooltip の削除 (SHRUI-464) ([#2121](https://github.com/kufu/smarthr-ui/issues/2121)) ([4ef5eed](https://github.com/kufu/smarthr-ui/commit/4ef5eed59692afb52b532be878a2ca4c3e830587))

### [16.0.2](https://github.com/kufu/smarthr-ui/compare/v16.0.1...v16.0.2) (2021-12-13)


### Bug Fixes

* `Input`のwidthをデフォルト値より小さく設定すると表示が崩れる不具合の修正 ([#2102](https://github.com/kufu/smarthr-ui/issues/2102)) ([d57c02b](https://github.com/kufu/smarthr-ui/commit/d57c02bd83a9f9997ad0a02fe62c170ef3921376))
* change not to show external link icon when suffix is null ([#2098](https://github.com/kufu/smarthr-ui/issues/2098)) ([36f4ce9](https://github.com/kufu/smarthr-ui/commit/36f4ce99bb0f3646d847436fc02585e05aef8379))
* LineClamp と Tooltip の baseline ズレを修正 ([#2101](https://github.com/kufu/smarthr-ui/issues/2101)) ([27ab76f](https://github.com/kufu/smarthr-ui/commit/27ab76fcf1179ebb9148019132d48b7341e169f8))
* SideNav のフォーカスインジケーターを新しい装飾に置き換える ([#2104](https://github.com/kufu/smarthr-ui/issues/2104)) ([b9f85ee](https://github.com/kufu/smarthr-ui/commit/b9f85ee76319410215abcdef3eb11a4a33881a22))
* TextLink のアイコン縦位置を正す ([#2100](https://github.com/kufu/smarthr-ui/issues/2100)) ([f8791b2](https://github.com/kufu/smarthr-ui/commit/f8791b26868b6c97437c4b8ae645d82340b88412))

### [16.0.1](https://github.com/kufu/smarthr-ui/compare/v16.0.0...v16.0.1) (2021-12-06)


### Bug Fixes

* change not to focus trigger when `ModelessDialog` is closed ([#2083](https://github.com/kufu/smarthr-ui/issues/2083)) ([2838bda](https://github.com/kufu/smarthr-ui/commit/2838bda1be7d3d8dfefdec6317b77f6653f87c30))
* change to pass ElementProps to Wrapper of `FlashMessage` ([#2095](https://github.com/kufu/smarthr-ui/issues/2095)) ([7711350](https://github.com/kufu/smarthr-ui/commit/77113506d1224ea3e07793a313d821e573e42a71))
* fontSize.S の影響で Button[size=s] の縦揃えに影響していたので修正 ([#2058](https://github.com/kufu/smarthr-ui/issues/2058)) ([33912ee](https://github.com/kufu/smarthr-ui/commit/33912eefcb32cbe7b36f58003367c0c0aecd5965))

## [16.0.0](https://github.com/kufu/smarthr-ui/compare/v15.3.0...v16.0.0) (2021-11-29)


### ⚠ BREAKING CHANGES

* サポートする node バージョンを更新 (#2022)

### Bug Fixes

* adjust LineClamp height in safari ([#2074](https://github.com/kufu/smarthr-ui/issues/2074)) ([515b691](https://github.com/kufu/smarthr-ui/commit/515b691452c6ccc11b7242fd6d0b54b81d01455a))
* fix to re-calcurate position of listbox on `MultiComboBox` ([#2075](https://github.com/kufu/smarthr-ui/issues/2075)) ([5aec65c](https://github.com/kufu/smarthr-ui/commit/5aec65c3be8fc2daba3916e246863c829cc23456))


* サポートする node バージョンを更新 ([#2022](https://github.com/kufu/smarthr-ui/issues/2022)) ([0d052f6](https://github.com/kufu/smarthr-ui/commit/0d052f65b14a5693e07de82d1dab61eb55c3cfe8))

## [15.3.0](https://github.com/kufu/smarthr-ui/compare/v15.2.2...v15.3.0) (2021-11-22)


### Features

* `Tooltip` に自動位置決め機能を追加し、`LineClamp` のツールチップが見切れないようにする (SHRUI-483) ([#2035](https://github.com/kufu/smarthr-ui/issues/2035)) ([8652e9c](https://github.com/kufu/smarthr-ui/commit/8652e9cc6e91cee3118336272e226f9e71094dfb))


### Bug Fixes

* `Calendar` がブラウザのフォントサイズによってスタイル崩れを起こさないように修正 (SHRUI-466) ([#2040](https://github.com/kufu/smarthr-ui/issues/2040)) ([ba5fcf1](https://github.com/kufu/smarthr-ui/commit/ba5fcf12d3d12aabcbb438708de4e56b10b4193b))
* `InputFile` が IE でクラッシュしないように修正 ([#2056](https://github.com/kufu/smarthr-ui/issues/2056)) ([6314229](https://github.com/kufu/smarthr-ui/commit/6314229de3541d32a30d03bb2aab6ec0e7e2372c))
* fix typos ([#2043](https://github.com/kufu/smarthr-ui/issues/2043)) ([49788ca](https://github.com/kufu/smarthr-ui/commit/49788caa4e29582ca47e1bdb035a22685a698db8))
* inputFileコンポーネントでコンポーネント内部のinput要素のvalueが変化しないのを修正します ([#2025](https://github.com/kufu/smarthr-ui/issues/2025)) ([0ac322d](https://github.com/kufu/smarthr-ui/commit/0ac322d812610a6471c268589a41f74954daddd4))
* reset margin of button on SegmentedControl ([#2060](https://github.com/kufu/smarthr-ui/issues/2060)) ([9054c71](https://github.com/kufu/smarthr-ui/commit/9054c710970d3fe632b94f220711e43bc5b0bb5a))
* Sidebar を export ([#2038](https://github.com/kufu/smarthr-ui/issues/2038)) ([30405cb](https://github.com/kufu/smarthr-ui/commit/30405cb3e9d96c8432089c4fd6e1463ff34e7141))

### [15.2.2](https://github.com/kufu/smarthr-ui/compare/v15.2.1...v15.2.2) (2021-11-08)


### Bug Fixes

* InputFileでキーボード操作でファイル選択ダイアログを表示できないのを修正します SHRUI-484 ([#2024](https://github.com/kufu/smarthr-ui/issues/2024)) ([d0b2e08](https://github.com/kufu/smarthr-ui/commit/d0b2e083a4ea93d4f403d850b0540d16c443560e))
* MessageScreen のリンクに下線を引く｜SHRUI-368 ([#2026](https://github.com/kufu/smarthr-ui/issues/2026)) ([bd1bdf8](https://github.com/kufu/smarthr-ui/commit/bd1bdf89d603491da4744152e2cc998e4f2f40b5))

### [15.2.1](https://github.com/kufu/smarthr-ui/compare/v15.2.0...v15.2.1) (2021-11-01)


### Bug Fixes

* can not select search item ([#2008](https://github.com/kufu/smarthr-ui/issues/2008)) ([d820cc9](https://github.com/kufu/smarthr-ui/commit/d820cc9192e85fd6a2cf2aa3360eeeacb722fdf4))
* fix to activate selected item on SingleComboBox ([#2018](https://github.com/kufu/smarthr-ui/issues/2018)) ([3e82a21](https://github.com/kufu/smarthr-ui/commit/3e82a212b5e9e5012f6858d4db13ef8741fd27d6))

## [15.2.0](https://github.com/kufu/smarthr-ui/compare/v15.1.0...v15.2.0) (2021-10-26)


### Features

* AppNavi にドロップダウン示唆プロパティを追加 ([#1969](https://github.com/kufu/smarthr-ui/issues/1969)) ([eaaf5f7](https://github.com/kufu/smarthr-ui/commit/eaaf5f73d020e642cb8ff38dce68fb67c80d6265))
* ComboBox・DatePicker・Selectのキャレットの色を変更・統一 ([#1975](https://github.com/kufu/smarthr-ui/issues/1975)) ([fbfe05c](https://github.com/kufu/smarthr-ui/commit/fbfe05c1824ed529145c19f515cfbae51599d51f))
* comboboxのautoComplete属性をoffに変更 ([#1974](https://github.com/kufu/smarthr-ui/issues/1974)) ([c8e3228](https://github.com/kufu/smarthr-ui/commit/c8e3228b9ea8988e10006b0c38f4a328e32d36c2))
* comboboxのautoComplete属性をoffに変更 ([#1974](https://github.com/kufu/smarthr-ui/issues/1974)) ([1d5efdd](https://github.com/kufu/smarthr-ui/commit/1d5efdded8a188761585b1d13a92ba0816828984))


### Bug Fixes

* `CheckBox` 内のアイコンサイズがブラウザのフォントサイズ設定に追従するように変更 ([#1965](https://github.com/kufu/smarthr-ui/issues/1965)) ([2a9b09b](https://github.com/kufu/smarthr-ui/commit/2a9b09b288274ac822c80f9efcdd73a11775fd2b))
* add value, role, name to `<ModelessDialog>` handle ([#1967](https://github.com/kufu/smarthr-ui/issues/1967)) ([342aef9](https://github.com/kufu/smarthr-ui/commit/342aef9eab52f1ad792d8fd95305738492069464))
* change `FormGroup` to be able to indicate that is a group ([#1968](https://github.com/kufu/smarthr-ui/issues/1968)) ([7f1ec03](https://github.com/kufu/smarthr-ui/commit/7f1ec03689a51f63ecba6052907dc62a779ea2e3))
* change header height of `ModelessDialog` not to expand by padding ([#1963](https://github.com/kufu/smarthr-ui/issues/1963)) ([748b31f](https://github.com/kufu/smarthr-ui/commit/748b31f7c767aafa1a8e8114d04090a89012246d))
* change not to set icon size in `AppNavi` ([#1964](https://github.com/kufu/smarthr-ui/issues/1964)) ([4242aee](https://github.com/kufu/smarthr-ui/commit/4242aeed53d77091deae250f0e07a13d1d46d27e))
* FlashMessage のアイコン縦位置のズレを直しました ([#1966](https://github.com/kufu/smarthr-ui/issues/1966)) ([ca14c52](https://github.com/kufu/smarthr-ui/commit/ca14c5274299a96ebd399cd41c893562106b5e06))

## [15.1.0](https://github.com/kufu/smarthr-ui/compare/v15.0.1...v15.1.0) (2021-10-11)


### Features

* `MultiComboBox` のテキストボックスを制御できるようにするオプションを追加 (SHRUI-458) ([#1929](https://github.com/kufu/smarthr-ui/issues/1929)) ([12e2af3](https://github.com/kufu/smarthr-ui/commit/12e2af3137586d3423312ed23b1c9af31829a15f))
* TextLink の折返しに対応し、Affix にも下線を引く｜SHRUI-481 ([#1943](https://github.com/kufu/smarthr-ui/issues/1943)) ([63e216b](https://github.com/kufu/smarthr-ui/commit/63e216b26661ca8f4887d4c948abab4065d08666))


### Bug Fixes

* change position of radio button with multi line label to top ([#1945](https://github.com/kufu/smarthr-ui/issues/1945)) ([4bbe3c3](https://github.com/kufu/smarthr-ui/commit/4bbe3c3edbd0bb2973b9301c300e3310770b1b22))
* コンボボックスのドロップダウンが画面からはみ出さないようにする (SHRUI-478) ([#1930](https://github.com/kufu/smarthr-ui/issues/1930)) ([229ae02](https://github.com/kufu/smarthr-ui/commit/229ae020d8f359bf8fd4aaf6213ba7274cf43a57))
* 不要なアイコンサイズを削除 ([#1941](https://github.com/kufu/smarthr-ui/issues/1941)) ([12e06d5](https://github.com/kufu/smarthr-ui/commit/12e06d5816fc5132e54fc588169d87c33e4a375f))

### [15.0.1](https://github.com/kufu/smarthr-ui/compare/v15.0.0...v15.0.1) (2021-10-04)


### Bug Fixes

* fix flex shorthand for IE ([#1932](https://github.com/kufu/smarthr-ui/issues/1932)) ([4e14559](https://github.com/kufu/smarthr-ui/commit/4e1455942dd01dec91e7a975f07af918a552232e))
* SegmentedControl の border が消えているので修正 ([#1920](https://github.com/kufu/smarthr-ui/issues/1920)) ([8d63135](https://github.com/kufu/smarthr-ui/commit/8d63135b35e38a54536be8a59029abc796c30efa))

## [15.0.0](https://github.com/kufu/smarthr-ui/compare/v14.4.0...v15.0.0) (2021-09-28)


### ⚠ BREAKING CHANGES

* Button / Input / Selectの高さの計算を変更しました。Buttonの高さが固定でなくなり、フォントサイズやフレックスコンテナーの `align` の値など外部に依存します。

### Features

* Button の width / height の固定値をやめる｜SHRUI-427  ([#1908](https://github.com/kufu/smarthr-ui/issues/1908)) ([d4784da](https://github.com/kufu/smarthr-ui/commit/d4784da4ad7e744178a8f0da08d69f0e4e4c9abb))
* export useTheme hook ([#1893](https://github.com/kufu/smarthr-ui/issues/1893)) ([dac62fd](https://github.com/kufu/smarthr-ui/commit/dac62fde2a10a51f44037bd2a2956350a2bb00e4))
* Input のスタイリングを見直す｜SHRUI-460 ([#1909](https://github.com/kufu/smarthr-ui/issues/1909)) ([6351125](https://github.com/kufu/smarthr-ui/commit/635112525495d32f4aa2366168bbd261f4d8d444))
* Select のスタイリングを見直す ([#1919](https://github.com/kufu/smarthr-ui/issues/1919)) ([49b32d4](https://github.com/kufu/smarthr-ui/commit/49b32d44814783fc3fc0bb6670e8ea2ee1d1328c))
* 各種 Dialog を body 直下以外からも生成できるようにする｜SHRUI-474 ([#1891](https://github.com/kufu/smarthr-ui/issues/1891)) ([fa8eab8](https://github.com/kufu/smarthr-ui/commit/fa8eab8ab71e353cfc893d1e6c3322399854ae46))
* `<Sidebar>` Component を追加  ([#1888](https://github.com/kufu/smarthr-ui/issues/1888))

### Bug Fixes

* Dialogのsubtitle未指定の場合のaria-labelを調整する ([#1921](https://github.com/kufu/smarthr-ui/issues/1921)) ([d8e96ef](https://github.com/kufu/smarthr-ui/commit/d8e96ef221c5741d038ec990c212cb36d4b5fb75))
* display all items when refocus SingleCombobox ([#1922](https://github.com/kufu/smarthr-ui/issues/1922)) ([ad93e3e](https://github.com/kufu/smarthr-ui/commit/ad93e3e382bc78ae5ae84a5dbfb100462d910ceb))
* SingleCombobox の削除ボタンが Input の suffix を使っていたため、縦位置がずれていたので修正 ([#1923](https://github.com/kufu/smarthr-ui/issues/1923)) ([03026f6](https://github.com/kufu/smarthr-ui/commit/03026f617e58af126f04f9233aad8a9f8ac1612c))
* TextColors に TEXT_WHITE を追加し忘れていた ([#1886](https://github.com/kufu/smarthr-ui/issues/1886)) ([09d437d](https://github.com/kufu/smarthr-ui/commit/09d437db45bccd376806c4667432d3565667c3fb))
* ダイアログがアニメーション中に低いスタッキングコンテキストにならないように修正 ([#1887](https://github.com/kufu/smarthr-ui/issues/1887)) ([0e53afe](https://github.com/kufu/smarthr-ui/commit/0e53afea2934fcd2c0aa82a6435ca4a11cddc0e6))

## [14.4.0](https://github.com/kufu/smarthr-ui/compare/v14.3.0...v14.4.0) (2021-09-14)


### Features

* `MultiComboBox` に選択済みアイテムを省略表示できるオプションを追加 (SHRUI-450) ([#1860](https://github.com/kufu/smarthr-ui/issues/1860)) ([8178a53](https://github.com/kufu/smarthr-ui/commit/8178a53184f3d6f56c1096b5c6dd586caedcecda))
* add row column gap Cluster ([#1836](https://github.com/kufu/smarthr-ui/issues/1836)) ([c59b6ec](https://github.com/kufu/smarthr-ui/commit/c59b6ec4cb5f9c7e6d85e4066e33409c8b234fe0))
* color に WHITE を追加 ([#1864](https://github.com/kufu/smarthr-ui/issues/1864)) ([694ee8d](https://github.com/kufu/smarthr-ui/commit/694ee8d594c624224f5756dd0a08007abbc09629))

## [14.3.0](https://github.com/kufu/smarthr-ui/compare/v14.2.0...v14.3.0) (2021-09-06)


### Features

* `Icon` の color に抽象トークンを渡せるようにする (SHRUI-446) ([#1855](https://github.com/kufu/smarthr-ui/issues/1855)) ([df38807](https://github.com/kufu/smarthr-ui/commit/df38807203628256911deef5e4a0df195c38ceb9))
* `ModelessDialog` を追加 (SHRUI-454) ([#1786](https://github.com/kufu/smarthr-ui/issues/1786)) ([173e380](https://github.com/kufu/smarthr-ui/commit/173e380a42d7bffcc59550379605331a881bb102))
* コンボボックスに `onChangeSelected` を追加 (SHRUI-436) ([#1777](https://github.com/kufu/smarthr-ui/issues/1777)) ([54198fe](https://github.com/kufu/smarthr-ui/commit/54198fe2d885c5e3dc1a10aa3677835eca1c55c8))
* 余白トークンに 0 を追加 ([#1841](https://github.com/kufu/smarthr-ui/issues/1841)) ([5976a82](https://github.com/kufu/smarthr-ui/commit/5976a82da65f6cc10a715b7e6126c2af8acc016d))


### Bug Fixes

* change labeling structure and add htmlFor props ([#1778](https://github.com/kufu/smarthr-ui/issues/1778)) ([6511898](https://github.com/kufu/smarthr-ui/commit/6511898c7ed3167697faf5ae07c427a4d29c05c1))
* defaultLeading がエクスポートされていなかった ([#1842](https://github.com/kufu/smarthr-ui/issues/1842)) ([158e5b0](https://github.com/kufu/smarthr-ui/commit/158e5b06eff7e51cfb3f720e15f4e3d4024a8d8c))
* OVERLAP の重なり順序の改善 (SHRUI-445) ([#1837](https://github.com/kufu/smarthr-ui/issues/1837)) ([7970eb0](https://github.com/kufu/smarthr-ui/commit/7970eb02a41570de5b1fb91f8371e57fe58e14f6))

## [14.2.0](https://github.com/kufu/smarthr-ui/compare/v14.1.0...v14.2.0) (2021-09-01)


### Features

* FloatArea に HTML 属性と className を足す ([#1827](https://github.com/kufu/smarthr-ui/issues/1827)) ([b762212](https://github.com/kufu/smarthr-ui/commit/b7622121b8aaf875af9e4286ff307e2498f5d07b))


### Bug Fixes

* change selected item of listbox of `SingleComboBox` not to cut off ([#1826](https://github.com/kufu/smarthr-ui/issues/1826)) ([483b153](https://github.com/kufu/smarthr-ui/commit/483b153544d79c0e7efde81184973146c00e2bba))
* FloatArea エラーメッセージの余分な余白を取り除く ([#1820](https://github.com/kufu/smarthr-ui/issues/1820)) ([4ea4356](https://github.com/kufu/smarthr-ui/commit/4ea435644cc6bd0329147279d898624c410beceb))
* ツールチップ、バルーンのダークモードを非推奨にする (SHRUI-444) ([#1825](https://github.com/kufu/smarthr-ui/issues/1825)) ([cbabedd](https://github.com/kufu/smarthr-ui/commit/cbabedd39547dede86334fd6e47903904be10bf7))

## [14.1.0](https://github.com/kufu/smarthr-ui/compare/v14.0.1...v14.1.0) (2021-08-23)


### Features

* ActionDialog と MessageDialog に副題を追加 ([#1812](https://github.com/kufu/smarthr-ui/issues/1812)) ([e2a6344](https://github.com/kufu/smarthr-ui/commit/e2a6344e9af1733064d0cfbf122a2f4dd776af34))


### Bug Fixes

* Calendar の年選択ボタンのイベント伝播を阻止する ([#1803](https://github.com/kufu/smarthr-ui/issues/1803)) ([bcf378d](https://github.com/kufu/smarthr-ui/commit/bcf378d8064e7b64731ad13e03080df81c541570))

## [14.0.1](https://github.com/kufu/smarthr-ui/compare/v14.0.0...v14.0.1) (2021-08-16)


### Bug Fixes

- TextLink に prefix/suffix を含まない場合はレイアウトコンポーネントを使わない (#1766) (4e05ff4e9251db9cee287b2955032c1b1aaa280e)
- FloatArea で p > div になっていたので修正 (#1788) (992f9cab2440bf397490b4ba87d74d571a37a0ae)

## [14.0.0](https://github.com/kufu/smarthr-ui/compare/v13.3.0...v14.0.0) (2021-08-02)


### ⚠ BREAKING CHANGES

* 利用されていなかった `Header` コンポーネントを削除しました。
* `RightFixedNote` において `title`
が必須プロパティになります。
* 旧 `CheckBox` および `CheckBoxLabel`
を削除しました。新しい `CheckBox` を使用してください。
* 旧 `RadioButton` および `RadioButtonLabel`
を削除しました。新しい `RadioButton` を使用してください。
* `SingleComboBox` の `onSelect`
が選択クリア時に発火しなくなります。選択クリアのハンドリングは `onClear`
で行ってください。

### Features

* add onClear handler ([#1747](https://github.com/kufu/smarthr-ui/issues/1747)) ([cc0fd58](https://github.com/kufu/smarthr-ui/commit/cc0fd580569a24067ef99e04c32bd3211ffb319e))
* make title required, and display textarea label ([#1744](https://github.com/kufu/smarthr-ui/issues/1744)) ([e14c01d](https://github.com/kufu/smarthr-ui/commit/e14c01dab4305a814fb8e472893e16d0bf76e8bc))
* remove unused <Header> ([#1761](https://github.com/kufu/smarthr-ui/issues/1761)) ([5a67dc5](https://github.com/kufu/smarthr-ui/commit/5a67dc5f6834911cf7a9968ecb3dfc77df4de9f4))


### Bug Fixes

* CheckBox コンポーネントのリネームと整理 (SHRUI-419) ([#1748](https://github.com/kufu/smarthr-ui/issues/1748)) ([4ed6875](https://github.com/kufu/smarthr-ui/commit/4ed68752b13eafbf156472f9f022bb99a81044c9))
* RadioButton コンポーネントのリネームと整理 (SHRUI-419) ([#1754](https://github.com/kufu/smarthr-ui/issues/1754)) ([d6c0fa5](https://github.com/kufu/smarthr-ui/commit/d6c0fa587e0ec9dd5dab0256e9f4be1be134730d))

## [13.3.0](https://github.com/kufu/smarthr-ui/compare/v13.2.0...v13.3.0) (2021-07-20)


### Features

* add option for fixedhead ([#1672](https://github.com/kufu/smarthr-ui/issues/1672)) ([21f5c86](https://github.com/kufu/smarthr-ui/commit/21f5c864ff9cd837a32a85e880df2b19d88862db))
* DropDown コンポーネントの属性の改善 SHRUI-262 ([#1670](https://github.com/kufu/smarthr-ui/issues/1670)) ([e7813d7](https://github.com/kufu/smarthr-ui/commit/e7813d75ff9e978595724e0fcc1c7aad51f0615b))
* Stack に align を追加 ([#1753](https://github.com/kufu/smarthr-ui/issues/1753)) ([5d00d6b](https://github.com/kufu/smarthr-ui/commit/5d00d6b4f7349154aaeeee93b10f16a84076935b))

## [13.2.0](https://github.com/kufu/smarthr-ui/compare/v13.1.0...v13.2.0) (2021-07-13)


### Features

* Stack をインライン要素のように振る舞えるように inline を追加 ([#1729](https://github.com/kufu/smarthr-ui/issues/1729)) ([95413d4](https://github.com/kufu/smarthr-ui/commit/95413d4a026b548c30276028870690746912d365))
* 影のテーマの追加と置き換え (SHRUI-417) ([#1699](https://github.com/kufu/smarthr-ui/issues/1699)) ([8737ad1](https://github.com/kufu/smarthr-ui/commit/8737ad15702b7586f6513955b42f03b0abf2e303))


### Bug Fixes

* `AccordionPanel` のフォーカスインジケータが隠れないように修正 (SHRUI-412) ([#1698](https://github.com/kufu/smarthr-ui/issues/1698)) ([f82fe2c](https://github.com/kufu/smarthr-ui/commit/f82fe2cb8a0c2362f79af8b9f12fd16c281ebadd))
* `ActionDialog` の warning 解消 ([#1713](https://github.com/kufu/smarthr-ui/issues/1713)) ([c077991](https://github.com/kufu/smarthr-ui/commit/c077991335b900627913bcbe062d7389d16b661c))
* Baloon に span を渡せるように修正 ([#1723](https://github.com/kufu/smarthr-ui/issues/1723)) ([54f1240](https://github.com/kufu/smarthr-ui/commit/54f124019be960e636dc4c3c2dd4f7d4240ea59c))
* change default color of affix of `Input` ([#1726](https://github.com/kufu/smarthr-ui/issues/1726)) ([2099eaa](https://github.com/kufu/smarthr-ui/commit/2099eaac870db0dcf63dabcf24b112bf889dde29))
* fix focus indicator not to be hidden by sibling elements ([#1725](https://github.com/kufu/smarthr-ui/issues/1725)) ([dfc08de](https://github.com/kufu/smarthr-ui/commit/dfc08de31843f97bffe008ac00b25c97f7a2bf53))
* rename onChange to onChangeInput ([#1727](https://github.com/kufu/smarthr-ui/issues/1727)) ([0ebcc40](https://github.com/kufu/smarthr-ui/commit/0ebcc403eeee793dfa343f5cbd9587aa8059b865))
* Tooltip の tabIndex を利用側で上書きできないので修正 ([#1709](https://github.com/kufu/smarthr-ui/issues/1709)) ([6cf8f01](https://github.com/kufu/smarthr-ui/commit/6cf8f017b2d3d8e8ba31eef4b21c54026e8fb9dc))
* コンボボックスのフォーカス挙動を変更 (SHRUI-423) ([#1724](https://github.com/kufu/smarthr-ui/issues/1724)) ([b682a36](https://github.com/kufu/smarthr-ui/commit/b682a364b03c870c9dab1845e46887816fba32b0))

## [13.1.0](https://github.com/kufu/smarthr-ui/compare/v13.0.0...v13.1.0) (2021-06-29)


### Features

* `CompactInformationPanel` の属性の改善 (SHRUI-435) ([#1676](https://github.com/kufu/smarthr-ui/issues/1676)) ([b501e4f](https://github.com/kufu/smarthr-ui/commit/b501e4f43b4f0343badd8a593cb7daec2d599124))
* `Input` の属性の改善 (SHRUI-273) ([#1658](https://github.com/kufu/smarthr-ui/issues/1658)) ([9672209](https://github.com/kufu/smarthr-ui/commit/9672209c3a5c800dc23c03c3c9a9d1bb4b366d6b))
* `Pagination` の属性の改善 (SHRUI-278) ([#1673](https://github.com/kufu/smarthr-ui/issues/1673)) ([94f09a7](https://github.com/kufu/smarthr-ui/commit/94f09a7a13be6e90931fbbb882a8593d8529f577))
* `RightFixedNote` の属性の改善 (SHRUI-282) ([#1677](https://github.com/kufu/smarthr-ui/issues/1677)) ([b09193f](https://github.com/kufu/smarthr-ui/commit/b09193f5860d75f130d29e84631ecf95c44c01c4))
* `SegmentedControl` の属性の改善 (SHRUI-283) ([#1678](https://github.com/kufu/smarthr-ui/issues/1678)) ([6371479](https://github.com/kufu/smarthr-ui/commit/6371479fb85ffc57068916f18a1e37cfec2b2144))
* `SmartHRLogo` の属性の改善 (SHRUI-285) ([#1680](https://github.com/kufu/smarthr-ui/issues/1680)) ([8efa186](https://github.com/kufu/smarthr-ui/commit/8efa18614b40736fd687d42af10ae9edd101681a))
* `StatusLabel` の属性の改善 (SHRUI-286) ([#1682](https://github.com/kufu/smarthr-ui/issues/1682)) ([81238f2](https://github.com/kufu/smarthr-ui/commit/81238f2b69e03684603d5f580bbba9d47f385d4d))
* `TabBar` の属性の改善 (SHRUI-287) ([#1683](https://github.com/kufu/smarthr-ui/issues/1683)) ([e273575](https://github.com/kufu/smarthr-ui/commit/e2735755d556b9fdedad44e68b10d2c0dfec9e0f))
* `Textarea` の属性の改善 ([#1686](https://github.com/kufu/smarthr-ui/issues/1686)) ([426b9e9](https://github.com/kufu/smarthr-ui/commit/426b9e9fab1e7164af2d9b086463e42f88ab3b27))
* `Tooltip` の属性の改善 (SHRUI-290) ([#1687](https://github.com/kufu/smarthr-ui/issues/1687)) ([65ba763](https://github.com/kufu/smarthr-ui/commit/65ba76397b29b4889ac00fb5f319e445a400dbdf))
* add default class name ([#1679](https://github.com/kufu/smarthr-ui/issues/1679)) ([394a077](https://github.com/kufu/smarthr-ui/commit/394a0775363820bd71ef0a2d2288281be1e34eb0))
* ComboBox の属性の改善 (SHRUI-277) ([#1662](https://github.com/kufu/smarthr-ui/issues/1662)) ([c93aa18](https://github.com/kufu/smarthr-ui/commit/c93aa18649473ecc8a701242018cfcf4f522ce88))
* Table の属性の改善 (SHRUI-288) ([#1684](https://github.com/kufu/smarthr-ui/issues/1684)) ([ef4995f](https://github.com/kufu/smarthr-ui/commit/ef4995f3c4b0aa93663fcb78d0ed0022ee69903b))
* Text コンポーネントに whiteSpace を追加 ([#1704](https://github.com/kufu/smarthr-ui/issues/1704)) ([9b95ae7](https://github.com/kufu/smarthr-ui/commit/9b95ae73a396d7981d8a6399754d64b3a494371a))


### Bug Fixes

* Cluster のインポートを追加 ([#1685](https://github.com/kufu/smarthr-ui/issues/1685)) ([379ea1c](https://github.com/kufu/smarthr-ui/commit/379ea1ca9fedeaeb6ea96628aac2f98efa6d6d9e))
* DialogContentInner の className が Wrraper にあたっていたのを Inner に戻す ([#1695](https://github.com/kufu/smarthr-ui/issues/1695)) ([9fd9791](https://github.com/kufu/smarthr-ui/commit/9fd97910bfb85aac6885663eb28b82c9a21928f9))
* MultiComboBox の削除アイコンの visuallyHiddenText をアイテムごとに分ける ([#1694](https://github.com/kufu/smarthr-ui/issues/1694)) ([c0acf2a](https://github.com/kufu/smarthr-ui/commit/c0acf2a0ec77adb3ed76b717c5454fb4899d46ce))
* Text を styled-component で wrap できなかったので修正｜ SHRUI-439 ([#1696](https://github.com/kufu/smarthr-ui/issues/1696)) ([c0e79f5](https://github.com/kufu/smarthr-ui/commit/c0e79f5d3e4064c4970840f9f3363ad4fe8594aa))

## [13.0.0](https://github.com/kufu/smarthr-ui/compare/v12.4.0...v13.0.0) (2021-06-15)


### ⚠ BREAKING CHANGES

* remove Icon component that uses name prop
* modify not to use old Icon component
* replace title tag from span to h3 in InformationPanel
* drop node v10 support

### Features

* `BlankImage` の属性の改善 (SHRUI-270) ([#1653](https://github.com/kufu/smarthr-ui/issues/1653)) ([d42ee33](https://github.com/kufu/smarthr-ui/commit/d42ee33543a1ebea9d42c7538bfc27213c6ce8d4))
* `Header` のclass名及び属性の改善 (SHRUI-266) ([#1639](https://github.com/kufu/smarthr-ui/issues/1639)) ([0d97bf2](https://github.com/kufu/smarthr-ui/commit/0d97bf25de74f88289703fb67f9692e5b2bd33c9))
* `Heading` の class 名と属性の改善 (SHRUI-267) ([#1640](https://github.com/kufu/smarthr-ui/issues/1640)) ([703e93a](https://github.com/kufu/smarthr-ui/commit/703e93abc2049f928ac932520fb8e821c86d59c1))
* `HeadlineArea` の class 名と属性の改善 (SHRUI-268) ([#1641](https://github.com/kufu/smarthr-ui/issues/1641)) ([b7ddfa9](https://github.com/kufu/smarthr-ui/commit/b7ddfa959f712d891777953a41abead0eaf74df5))
* `Icon` にデフォルトクラスを追加 (SHRUI-269) ([#1651](https://github.com/kufu/smarthr-ui/issues/1651)) ([925790a](https://github.com/kufu/smarthr-ui/commit/925790a11ac7b1b5095971de7d800e3daea12e03))
* `IndexNav` の属性の改善 (SHRUI-271) ([#1654](https://github.com/kufu/smarthr-ui/issues/1654)) ([8114893](https://github.com/kufu/smarthr-ui/commit/8114893cdd926ccce8c9f1533cd61b8d321ab674))
* `InformationPanel` の属性の改善 (SHRUI-272) ([#1655](https://github.com/kufu/smarthr-ui/issues/1655)) ([6dfb7fc](https://github.com/kufu/smarthr-ui/commit/6dfb7fc60b99415a0b81faa4ad4ad4d12feeb95f))
* `MessageScreen` の属性の改善 (SHRUI-276) ([#1660](https://github.com/kufu/smarthr-ui/issues/1660)) ([d484ade](https://github.com/kufu/smarthr-ui/commit/d484ade3d11d7b38d4bc82a8570cfe05023d4c6e))
* add CheckBoxNew component ([#1604](https://github.com/kufu/smarthr-ui/issues/1604)) ([691cb2f](https://github.com/kufu/smarthr-ui/commit/691cb2fc99ec3247fa69b197d2d01a55989a2d98))
* add data props to be able to register data about each item in ComboBox (SHRUI-415) ([#1586](https://github.com/kufu/smarthr-ui/issues/1586)) ([2feec6e](https://github.com/kufu/smarthr-ui/commit/2feec6e0754c4001b4f165313ac2487327c246c5))
* add default class ([#1659](https://github.com/kufu/smarthr-ui/issues/1659)) ([0809cbb](https://github.com/kufu/smarthr-ui/commit/0809cbb4e14ea196ad7736b5511ba46915f78e9c))
* add default class name of parts ([#1632](https://github.com/kufu/smarthr-ui/issues/1632)) ([4fc5c26](https://github.com/kufu/smarthr-ui/commit/4fc5c26490065b73d2774ad301019d366d706699))
* add FlashMessageList ([#1583](https://github.com/kufu/smarthr-ui/issues/1583)) ([a26adfc](https://github.com/kufu/smarthr-ui/commit/a26adfced5bd9a3dde64ccb3b2fe90b1720d89b5))
* add loading state into ComboBox (SHRUI-375) ([#1551](https://github.com/kufu/smarthr-ui/issues/1551)) ([4f5e0b4](https://github.com/kufu/smarthr-ui/commit/4f5e0b4fd91a8cc54547de188d0b23e294e37b00))
* add RadioButtonNew component ([#1592](https://github.com/kufu/smarthr-ui/issues/1592)) ([3174af2](https://github.com/kufu/smarthr-ui/commit/3174af217ae083bfac3a2597e2a90b8b3bbb371a))
* deprecate CheckBox and CheckBoxLabel ([#1605](https://github.com/kufu/smarthr-ui/issues/1605)) ([7ca470b](https://github.com/kufu/smarthr-ui/commit/7ca470b4463556c8d7f88d52fa56eb4879c59717))
* deprecate FieldSet component ([#1631](https://github.com/kufu/smarthr-ui/issues/1631)) ([ee77143](https://github.com/kufu/smarthr-ui/commit/ee77143a3057d1c98bdfeff77075c4f958d76698))
* deprecate RadioButton and RadioButtonLabel ([#1606](https://github.com/kufu/smarthr-ui/issues/1606)) ([aa01e28](https://github.com/kufu/smarthr-ui/commit/aa01e282ed0044ce744e023eb281a4b29beb5900))
* enable to be able to make anchor button disabled (SHRUI-363) ([#1522](https://github.com/kufu/smarthr-ui/issues/1522)) ([fa91170](https://github.com/kufu/smarthr-ui/commit/fa911701eb5267f1f48bd0e4ea26ad2a50b78791))
* fix border color to SegmentedControl ([#1617](https://github.com/kufu/smarthr-ui/issues/1617)) ([499b800](https://github.com/kufu/smarthr-ui/commit/499b8008f01fe4abd852cf73654a9f3ee80ef1a5))
* fix input prefix/suffix icons color in storybook ([#1635](https://github.com/kufu/smarthr-ui/issues/1635)) ([acedb47](https://github.com/kufu/smarthr-ui/commit/acedb476b9090b50914e1f018c6bc755a945af10))
* implement FormGroup component ([#1297](https://github.com/kufu/smarthr-ui/issues/1297)) ([2e44c34](https://github.com/kufu/smarthr-ui/commit/2e44c34497e94cfab2cba5cb4bd8e725da805b48))
* improve attributes for Calendar ([#1474](https://github.com/kufu/smarthr-ui/issues/1474)) ([08e4efa](https://github.com/kufu/smarthr-ui/commit/08e4efa2373e8425c2b9ea4c99f4ab6a9d21ac64))
* improve attributes for Dialog ([#1514](https://github.com/kufu/smarthr-ui/issues/1514)) ([93a345d](https://github.com/kufu/smarthr-ui/commit/93a345d5dcb2a00e0b65cd5281cfff47147031f2))
* improve attributes for FieldSet ([#1543](https://github.com/kufu/smarthr-ui/issues/1543)) ([1ca0162](https://github.com/kufu/smarthr-ui/commit/1ca0162bab51edf6c11ac2dac503db527f0db325))
* improve attributes for Footer ([#1633](https://github.com/kufu/smarthr-ui/issues/1633)) ([4d0e17d](https://github.com/kufu/smarthr-ui/commit/4d0e17d63accbb4d0b39a49a830ae7dbe2af5021))
* improve heading padding in InformationPanel ([#1561](https://github.com/kufu/smarthr-ui/issues/1561)) ([569d99a](https://github.com/kufu/smarthr-ui/commit/569d99adb91016203681ec70c18c3f47a71be22d))
* new focus appearance ([#1512](https://github.com/kufu/smarthr-ui/issues/1512)) ([8ad60f8](https://github.com/kufu/smarthr-ui/commit/8ad60f8517fe9b06c17473f0496c4511ea2bef43))


### Bug Fixes

* `<MultiCombobox>` focus indicator ([#1527](https://github.com/kufu/smarthr-ui/issues/1527)) ([520c8b6](https://github.com/kufu/smarthr-ui/commit/520c8b67a345177175cac9b9225abbeb4bab361b))
* ActionDialog のレスポンスメッセージがない時に余計な余白が出ている ([#1550](https://github.com/kufu/smarthr-ui/issues/1550)) ([e22258d](https://github.com/kufu/smarthr-ui/commit/e22258d07e47a890aea0bb43556630b0a83f2325))
* add aria-invalid to components with error state ([#1531](https://github.com/kufu/smarthr-ui/issues/1531)) ([b55b030](https://github.com/kufu/smarthr-ui/commit/b55b030550f6640781ae2a96640eeb6dd3ac8b84))
* added some attributes of accessibility for DatePicker component ([#1629](https://github.com/kufu/smarthr-ui/issues/1629)) ([aa7695f](https://github.com/kufu/smarthr-ui/commit/aa7695fb86dbd5bd57282f75c7f9c3cd9529afcf))
* change icon storybook from div to dl ([#1575](https://github.com/kufu/smarthr-ui/issues/1575)) ([5ef0212](https://github.com/kufu/smarthr-ui/commit/5ef021287cd49ad8b466436aedcefa1ea22c99f9))
* change the HTML tag of IndexNav ([#1634](https://github.com/kufu/smarthr-ui/issues/1634)) ([ab7704a](https://github.com/kufu/smarthr-ui/commit/ab7704adccb7ecbe916e681f5da0962d830b6a95))
* CompactInformationPanel に className を渡せるようにする ([#1669](https://github.com/kufu/smarthr-ui/issues/1669)) ([0994108](https://github.com/kufu/smarthr-ui/commit/0994108ea672b7c352a1b29a9e9a4005049063bd))
* Disable selected items when MultiComboBox is disabled ([#1544](https://github.com/kufu/smarthr-ui/issues/1544)) ([8edb9e0](https://github.com/kufu/smarthr-ui/commit/8edb9e0cd4dd305e84d812f79941ac7a294fbc80))
* Fix mobile Safari not showing all options for Select component  (SHRUI-392) ([#1517](https://github.com/kufu/smarthr-ui/issues/1517)) ([cdb85ce](https://github.com/kufu/smarthr-ui/commit/cdb85ce517ad154261418e6db42fad93fd8a2af2))
* FormGroup label to inline-block ([#1515](https://github.com/kufu/smarthr-ui/issues/1515)) ([d38aa0e](https://github.com/kufu/smarthr-ui/commit/d38aa0e18771163b3fd0a3cec9998695ce0bf73a))
* improve scroll suppression in Dialog (SHRUI-380) ([#1532](https://github.com/kufu/smarthr-ui/issues/1532)) ([9bf7bce](https://github.com/kufu/smarthr-ui/commit/9bf7bcef3c88ad88ac64db98126696ea47297b8a))
* modify not to new DOMRect for IE11 ([#1530](https://github.com/kufu/smarthr-ui/issues/1530)) ([2274ce6](https://github.com/kufu/smarthr-ui/commit/2274ce68b8c3fb1462c33f9ade94bbd8f5011d45))
* modify to be expected width when set percentage width ([#1585](https://github.com/kufu/smarthr-ui/issues/1585)) ([94a9eff](https://github.com/kufu/smarthr-ui/commit/94a9effa05a4ee9687cb49587581ca4724768882))
* set DIALOG shadow to CompactInformationPanel (SHRUI-400) ([#1549](https://github.com/kufu/smarthr-ui/issues/1549)) ([54823d8](https://github.com/kufu/smarthr-ui/commit/54823d89d1215c95a93891f4b8701b52b1942568))
* table all story accessible ([#1574](https://github.com/kufu/smarthr-ui/issues/1574)) ([1a8e53f](https://github.com/kufu/smarthr-ui/commit/1a8e53fa82938e8aecf5867e0c6c0d4c2e827ba4))


* fix!(BREAKING CHANGE): remove Icon that uses name prop (SHRUI-349) (#1494) ([b2952fa](https://github.com/kufu/smarthr-ui/commit/b2952fa64f2807b25925932f1f49d5153ae2b32d)), closes [#1494](https://github.com/kufu/smarthr-ui/issues/1494)
* fix!(BREAKING CHANGE): change default title tag in InformationPanel (SHRUI-170) (#1493) ([ed36ec3](https://github.com/kufu/smarthr-ui/commit/ed36ec395cd4f4c0bcf1fa4eec375673f9d32f8c)), closes [#1493](https://github.com/kufu/smarthr-ui/issues/1493)
* fix!(BREAKING CHANGE): drop node v10 support (SHRUI-384) (#1492) ([6dfc53e](https://github.com/kufu/smarthr-ui/commit/6dfc53ef549ef6711ba6863bf090fce021a56dc1)), closes [#1492](https://github.com/kufu/smarthr-ui/issues/1492)

## [12.4.0](https://github.com/kufu/smarthr-ui/compare/v12.4.0-1...v12.4.0) (2021-05-27)


### Bug Fixes

* modify to be expected width when set percentage width ([#1584](https://github.com/kufu/smarthr-ui/issues/1584)) ([cc7ec72](https://github.com/kufu/smarthr-ui/commit/cc7ec72493097b2f93d4c0e075a4244796b296fa))

## [12.4.0-1](https://github.com/kufu/smarthr-ui/compare/v12.4.0-0...v12.4.0-1) (2021-04-16)


### Bug Fixes

* Fix mobile Safari not showing all options for Select component  (SHRUI-392) ([#1517](https://github.com/kufu/smarthr-ui/issues/1517)) ([7b564b2](https://github.com/kufu/smarthr-ui/commit/7b564b2206c0734eaaa4d7fd9b2769cd74c9fe17))

## [12.4.0-0](https://github.com/kufu/smarthr-ui/compare/v12.3.1...v12.4.0-0) (2021-04-12)


### Features

* add default class names to button components ([#1472](https://github.com/kufu/smarthr-ui/issues/1472)) ([cd49408](https://github.com/kufu/smarthr-ui/commit/cd494088e8f208cc6c653bf7736197e5cca5a03f))
* add SingleComboBox (SHRUI-66) ([#1426](https://github.com/kufu/smarthr-ui/issues/1426)) ([3412352](https://github.com/kufu/smarthr-ui/commit/341235264700d750eb12574eb37aa6a8e65f9f5c))
* add sync icon to InformationPanel ([#1476](https://github.com/kufu/smarthr-ui/issues/1476)) ([166e9ee](https://github.com/kufu/smarthr-ui/commit/166e9eef1d63ab4c0c1a9194d5097d2fbf1fc99b))
* apply classNames to FlashMessage ([#1473](https://github.com/kufu/smarthr-ui/issues/1473)) ([9104d81](https://github.com/kufu/smarthr-ui/commit/9104d817f784f418977fb5597525019d5e634702))
* improve attributes for DefinitionList ([#1441](https://github.com/kufu/smarthr-ui/issues/1441)) ([27c4fc0](https://github.com/kufu/smarthr-ui/commit/27c4fc06abe17e83b664c36e219804395624e0dd))


### Bug Fixes

* enable to set attributes of dropzone and add smarthr-ui dropzone class name ([#1445](https://github.com/kufu/smarthr-ui/issues/1445)) ([2c73296](https://github.com/kufu/smarthr-ui/commit/2c73296d46c6bbfefc2bb28854b91489948707e6))
* exclude disabled element ([#1410](https://github.com/kufu/smarthr-ui/issues/1410)) ([fd9c0f3](https://github.com/kufu/smarthr-ui/commit/fd9c0f30cd1e94aa57b9b11552e1078c693380a4))
* Merge hotfix v12.3.0 to master ([#1477](https://github.com/kufu/smarthr-ui/issues/1477)) ([e5d8e8d](https://github.com/kufu/smarthr-ui/commit/e5d8e8d9de1e5375b3ecdb04616842f61494a488)), closes [#1475](https://github.com/kufu/smarthr-ui/issues/1475)
* modify height of MultiComboBox (SHRUI-364) ([#1471](https://github.com/kufu/smarthr-ui/issues/1471)) ([d28daf1](https://github.com/kufu/smarthr-ui/commit/d28daf1bd9e16e3e8eaa23da19de6e0767b11579))

### [12.3.2](https://github.com/kufu/smarthr-ui/compare/v12.3.1...v12.3.2) (2021-04-16)


### Bug Fixes

* Fix mobile Safari not showing all options for Select component  (SHRUI-392) ([#1517](https://github.com/kufu/smarthr-ui/issues/1517)) ([e235d82](https://github.com/kufu/smarthr-ui/commit/e235d827ce313a9668ea92581a0719ad1cbe98a4))

### [12.3.1](https://github.com/kufu/smarthr-ui/compare/v12.3.0...v12.3.1) (2021-04-01)


### Bug Fixes

* fix problem with createTheme ([#1475](https://github.com/kufu/smarthr-ui/issues/1475)) ([d980d4d](https://github.com/kufu/smarthr-ui/commit/d980d4dff014c459469ae73cb1c21f55f4a43253))

## [12.3.0](https://github.com/kufu/smarthr-ui/compare/v12.2.1...v12.3.0) (2021-03-23)


### Features

* ActionDialog にレスポンスメッセージエリアを追加 ([#1424](https://github.com/kufu/smarthr-ui/issues/1424)) ([fa37d0e](https://github.com/kufu/smarthr-ui/commit/fa37d0e1091329363be9f739a262ab036d65726f))
* add floatArea component ([#1270](https://github.com/kufu/smarthr-ui/issues/1270)) ([370ce97](https://github.com/kufu/smarthr-ui/commit/370ce9754bb26297eae079125939e01475174783))
* add new icon, fa-user-clock ([#1392](https://github.com/kufu/smarthr-ui/issues/1392)) ([78fc529](https://github.com/kufu/smarthr-ui/commit/78fc529d0a545b223a2081a600370117ade7e6f9))
* change colors (SHRUI-356, SHRUI-357, SHRUI-358) ([#1407](https://github.com/kufu/smarthr-ui/issues/1407)) ([777dbbc](https://github.com/kufu/smarthr-ui/commit/777dbbc16f27867409ef94c1c454d5ee09b89bd9))
* improve attributes for BackgroundJobsList and BackgroundJobsPanel (SHRUI-249) ([#1404](https://github.com/kufu/smarthr-ui/issues/1404)) ([de9ece9](https://github.com/kufu/smarthr-ui/commit/de9ece95ec3dd3d880946f40de38ff64bcafaec6))
* improve attributes for Base and DialogBase ([#1402](https://github.com/kufu/smarthr-ui/issues/1402)) ([a91f008](https://github.com/kufu/smarthr-ui/commit/a91f008e952cbffe409528fe42dfe88dedf71149))
* support multiline text of CheckboxLabel ([#1403](https://github.com/kufu/smarthr-ui/issues/1403)) ([3441590](https://github.com/kufu/smarthr-ui/commit/3441590512686bad55e1d473bbc0cea275b77907))


### Bug Fixes

* add disabled to the current button of pagenation ([#1429](https://github.com/kufu/smarthr-ui/issues/1429)) ([c40a824](https://github.com/kufu/smarthr-ui/commit/c40a824f92c620c0c54c5b43f43ec271f8048a63))
* add preset className to checkbox (SHRUI-255) ([#1391](https://github.com/kufu/smarthr-ui/issues/1391)) ([e455537](https://github.com/kufu/smarthr-ui/commit/e45553704d03d9f25ff2acc3591873f100e8bae2))
* change style to show focus indicator ([#1421](https://github.com/kufu/smarthr-ui/issues/1421)) ([200fe2c](https://github.com/kufu/smarthr-ui/commit/200fe2c8f62eb7ce2102fd3bda1c9ea5da5d713a))
* enable to set attributes of input element ([#1363](https://github.com/kufu/smarthr-ui/issues/1363)) ([9300a68](https://github.com/kufu/smarthr-ui/commit/9300a6848126c3a73e97b2fd7af29ccc85d769a8))
* flatten theme tree (SHRUI-204) ([#1256](https://github.com/kufu/smarthr-ui/issues/1256)) ([1b13571](https://github.com/kufu/smarthr-ui/commit/1b1357190f5d685f1ad9e0b389186d097aaf0cb9))
* improve ARIA ([#1409](https://github.com/kufu/smarthr-ui/issues/1409)) ([e2de01a](https://github.com/kufu/smarthr-ui/commit/e2de01a650c8a6c15a6d7f1a4a1e11d187204f49))
* improve attributes of AppNavi (SHRUI-248) ([#1378](https://github.com/kufu/smarthr-ui/issues/1378)) ([2e7e020](https://github.com/kufu/smarthr-ui/commit/2e7e020552e4f229a1f7fbeeedbbee22c0f08950))
* improve attributes of BottomFixedArea ([#1364](https://github.com/kufu/smarthr-ui/issues/1364)) ([1d0bf46](https://github.com/kufu/smarthr-ui/commit/1d0bf46a1dd4cc37c30d9cde1fa17537325143d2))
* improve attributes of CheckBoxLabel (SHRUI-256) ([#1427](https://github.com/kufu/smarthr-ui/issues/1427)) ([7c082e4](https://github.com/kufu/smarthr-ui/commit/7c082e4ea43301765faa551a367a17be64a5aa03))
* remove position: fixed for Footer in MessageScreen ([#1365](https://github.com/kufu/smarthr-ui/issues/1365)) ([c9505de](https://github.com/kufu/smarthr-ui/commit/c9505de9d38d365a545c7ac3c3ed3e4ae099debb))
* suppress to fire handler during animation for closing in Dialog (SHRUI-343) ([#1406](https://github.com/kufu/smarthr-ui/issues/1406)) ([a28ad0b](https://github.com/kufu/smarthr-ui/commit/a28ad0b1be3f0da0c1a05e74a69aacfcf2d39b84))
* tab-bar outline style ([#1439](https://github.com/kufu/smarthr-ui/issues/1439)) ([dbbca09](https://github.com/kufu/smarthr-ui/commit/dbbca0912dae5f7634a8441eb75a7850c413a784))
* textarea outline style ([#1440](https://github.com/kufu/smarthr-ui/issues/1440)) ([1539e0e](https://github.com/kufu/smarthr-ui/commit/1539e0e104af545ac6849fee016f8d2c8c55e78e))

### [12.2.1](https://github.com/kufu/smarthr-ui/compare/v12.2.0...v12.2.1) (2021-02-16)


### Bug Fixes

* enable to set disabled to close button ([#1326](https://github.com/kufu/smarthr-ui/issues/1326)) ([1f6fd86](https://github.com/kufu/smarthr-ui/commit/1f6fd8674f55fd8786db258b5535aba16fa69a0e))
* modify not to call other hooks in useMemo ([#1368](https://github.com/kufu/smarthr-ui/issues/1368)) ([c0070bc](https://github.com/kufu/smarthr-ui/commit/c0070bcefce89dc68250bbb7c194d05c764cd101))

## [12.2.0](https://github.com/kufu/smarthr-ui/compare/v12.1.1...v12.2.0) (2021-02-15)


### Features

* add handling when Window object is not supported ([#1312](https://github.com/kufu/smarthr-ui/issues/1312)) ([9391da3](https://github.com/kufu/smarthr-ui/commit/9391da31bae15a58fe3b9f8cd6d04c5ca7f550e0))


### Bug Fixes

* add light focus trap in Dialog (SHRUI-348) ([#1351](https://github.com/kufu/smarthr-ui/issues/1351)) ([b625739](https://github.com/kufu/smarthr-ui/commit/b62573939eff33bd60ba979f1791fd931b0cd8fd))
* improve attributes Base ([#1337](https://github.com/kufu/smarthr-ui/issues/1337)) ([801d02a](https://github.com/kufu/smarthr-ui/commit/801d02a508f6916ac855d0c570baaba8793a7909))
* improve attributes of Balloon (SHRUI-250) ([#1339](https://github.com/kufu/smarthr-ui/issues/1339)) ([8ca9dae](https://github.com/kufu/smarthr-ui/commit/8ca9dae06a1bfbd4410971c2d11ee3a754813e9f))

### [12.1.1](https://github.com/kufu/smarthr-ui/compare/v12.1.0...v12.1.1) (2021-02-08)


### Bug Fixes

* rename story file to include .stories ([#1340](https://github.com/kufu/smarthr-ui/issues/1340)) ([269aea3](https://github.com/kufu/smarthr-ui/commit/269aea369af0c9018c2f233ef8c959d42fd5413c))

## [12.1.0](https://github.com/kufu/smarthr-ui/compare/v12.0.0...v12.1.0) (2021-02-08)


### Features

* add new icons; fa-medkit and fa-tachometer-alt ([#1299](https://github.com/kufu/smarthr-ui/issues/1299)) ([e9557d6](https://github.com/kufu/smarthr-ui/commit/e9557d6ba1539dd24841664f5c2b95f8b49d4cbb))
* support <Fa***Icon /> components in addition to <Icon name="fa-***" /> ([#1304](https://github.com/kufu/smarthr-ui/issues/1304)) ([cf5fbe1](https://github.com/kufu/smarthr-ui/commit/cf5fbe1ef36f393ac6a1314fa46c212c944be239))


### Bug Fixes

* add "!important" to font-size of InputFile ([#1313](https://github.com/kufu/smarthr-ui/issues/1313)) ([757ebc6](https://github.com/kufu/smarthr-ui/commit/757ebc64b07ecc00818f26d8df4c82362b302fb5))
* add Segmented control ARIA (SHRUI-242) ([#1223](https://github.com/kufu/smarthr-ui/issues/1223)) ([f3c62cd](https://github.com/kufu/smarthr-ui/commit/f3c62cde713e08d9501cfc19f3cab82f0e2679ac))
* change input error style (SHRUI-327) ([#1298](https://github.com/kufu/smarthr-ui/issues/1298)) ([8db8c06](https://github.com/kufu/smarthr-ui/commit/8db8c069557f01fc0debc205df0d05380976fcf7))
* enable to set attributes of input element ([#1321](https://github.com/kufu/smarthr-ui/issues/1321)) ([b67b899](https://github.com/kufu/smarthr-ui/commit/b67b899f2e53ea6a81c8008ad2b774531be78213))
* enable to set disabled in Option of Select (SHRUI-303) ([#1318](https://github.com/kufu/smarthr-ui/issues/1318)) ([9388106](https://github.com/kufu/smarthr-ui/commit/9388106f098eed9c073bb72c42c79f6041d247d2))
* fix position of visually hidden text ([#1317](https://github.com/kufu/smarthr-ui/issues/1317)) ([3b02210](https://github.com/kufu/smarthr-ui/commit/3b0221066b4091c1c4e775d98212064e13c0bdc3))
* fix the condition of displaying message of duplicating in MultiComboBox (SHRUI-302) ([#1237](https://github.com/kufu/smarthr-ui/issues/1237)) ([e35848f](https://github.com/kufu/smarthr-ui/commit/e35848f024ce9fceb0b2f83f82e7124a702089b8))
* improve attributes of AccordionPanel (SHRUI-246) ([#1290](https://github.com/kufu/smarthr-ui/issues/1290)) ([2a58b0a](https://github.com/kufu/smarthr-ui/commit/2a58b0a6730a8b8e6321bfb84cb3aab5e747b6a0))
* input[file] の不要なfocusを削除する ([#1314](https://github.com/kufu/smarthr-ui/issues/1314)) ([209b8fb](https://github.com/kufu/smarthr-ui/commit/209b8fb54aa9c818843ecb5ec7a25190f63c4c3d))
* modify Dialog to be able to set aria-controls (SHRUI-220) ([#1231](https://github.com/kufu/smarthr-ui/issues/1231)) ([ae1cc05](https://github.com/kufu/smarthr-ui/commit/ae1cc05a8534d75feac98082feeeaa6072cfa36c))
* modify not to apply hover or focus style from other css to Button ([#1242](https://github.com/kufu/smarthr-ui/issues/1242)) ([8315e21](https://github.com/kufu/smarthr-ui/commit/8315e21c7d7818037c888f40ec8c94da4d5bace5))
* modify not to fire escape key handler when dialog is not open ([#1235](https://github.com/kufu/smarthr-ui/issues/1235)) ([b868654](https://github.com/kufu/smarthr-ui/commit/b868654a4d71d369e7480ff46d88091aa7863283))
* modify to be able to scroll dropdown in IE ([#1206](https://github.com/kufu/smarthr-ui/issues/1206)) ([12a24f7](https://github.com/kufu/smarthr-ui/commit/12a24f704d29a734aca45a142485f1e7c54f500a))
* replace old color code of storybook to theme in DefinitionList ([#1249](https://github.com/kufu/smarthr-ui/issues/1249)) ([d81dc3e](https://github.com/kufu/smarthr-ui/commit/d81dc3ef56cc686d49a53617957f866bc49d661c))

## [12.0.0](https://github.com/kufu/smarthr-ui/compare/v11.1.0...v12.0.0) (2021-01-12)


### ⚠ BREAKING CHANGES

* change loader animation (#1173)
* remove shinColorPalette
* add type props to button (#1086)

### Features

* add "from" and "to" props to DatePicker component ([#1123](https://github.com/kufu/smarthr-ui/issues/1123)) ([7f841e0](https://github.com/kufu/smarthr-ui/commit/7f841e08964fc1c912d2e3d042015f04e254deb6))
* add blukActionArea in Head of Table (SHRUI-8) ([#937](https://github.com/kufu/smarthr-ui/issues/937)) ([bf0158a](https://github.com/kufu/smarthr-ui/commit/bf0158acb176fc42be5e9365b996b1998db12f70))
* add border style to MessageDialog ([#1059](https://github.com/kufu/smarthr-ui/issues/1059)) ([add5da7](https://github.com/kufu/smarthr-ui/commit/add5da754c47190bacf6d69c9ae6b88dd34ec0cf))
* add darkenAmount argument to hoverColor method ([#950](https://github.com/kufu/smarthr-ui/issues/950)) ([7d78586](https://github.com/kufu/smarthr-ui/commit/7d78586cc9073c3ac4fd998169e285f3ac72f6e4))
* add hasBlank and blankLabel props to Select ([#1061](https://github.com/kufu/smarthr-ui/issues/1061)) ([165e104](https://github.com/kufu/smarthr-ui/commit/165e1049083ae19dab9d2ee5030375130aa3700b))
* add Shin color (SHRUI-227) ([#1141](https://github.com/kufu/smarthr-ui/issues/1141)) ([1c8063a](https://github.com/kufu/smarthr-ui/commit/1c8063ac92543f54b4046efc7d9f12a177cb891b))
* add SideNav component ([#1142](https://github.com/kufu/smarthr-ui/issues/1142)) ([6bae12c](https://github.com/kufu/smarthr-ui/commit/6bae12c4e24360e839f55a1f9f2789de75681d47)), closes [/github.com/kufu/smarthr-ui/pull/1142#discussion_r533174306](https://github.com/kufu//github.com/kufu/smarthr-ui/pull/1142/issues/discussion_r533174306)
* change the attribute of radius ([#1080](https://github.com/kufu/smarthr-ui/issues/1080)) ([0e5bb8f](https://github.com/kufu/smarthr-ui/commit/0e5bb8fc47268ac96f86a5d7d876f9fee9e34786))
* expose Icon components individually ([#1127](https://github.com/kufu/smarthr-ui/issues/1127)) ([f7e716b](https://github.com/kufu/smarthr-ui/commit/f7e716b019488f267caae733dbfc80f9d14a9cab))
* fix style of disabling selectbox ([#1184](https://github.com/kufu/smarthr-ui/issues/1184)) ([04f0240](https://github.com/kufu/smarthr-ui/commit/04f0240946bac8764d397d215f79fd7156e8febb))
* support React v17 ([#1151](https://github.com/kufu/smarthr-ui/issues/1151)) ([dc23011](https://github.com/kufu/smarthr-ui/commit/dc23011ad7db3eca02c1c5ea6e0dbe0af4da8367))


### Bug Fixes

*  invalid html width attribute ([#1105](https://github.com/kufu/smarthr-ui/issues/1105)) ([1061356](https://github.com/kufu/smarthr-ui/commit/1061356fdd9b4849740f0b7515cb34193d13676a))
* add aria and role attributes to dialog ([#1033](https://github.com/kufu/smarthr-ui/issues/1033)) ([92561f3](https://github.com/kufu/smarthr-ui/commit/92561f388350f5398afd7efea317527134a3e983)), closes [/github.com/kufu/smarthr-ui/pull/1033#discussion_r529388476](https://github.com/kufu//github.com/kufu/smarthr-ui/pull/1033/issues/discussion_r529388476)
* add aria and role attributes to Pagenation ([#1124](https://github.com/kufu/smarthr-ui/issues/1124)) ([8a5ac30](https://github.com/kufu/smarthr-ui/commit/8a5ac30ade05b68e08ad414573bab0aaffdc184c))
* add aria-checked to checkbox ([#1029](https://github.com/kufu/smarthr-ui/issues/1029)) ([69dfed1](https://github.com/kufu/smarthr-ui/commit/69dfed1262dc1197984caf202b48b9a013b30f23))
* add aria-controls to accordion button triggers for Change default Expanded ([#1140](https://github.com/kufu/smarthr-ui/issues/1140)) ([8d366c2](https://github.com/kufu/smarthr-ui/commit/8d366c258d09ef4476e17f5c34c832497cf97978))
* add aria-describedby ([#1137](https://github.com/kufu/smarthr-ui/issues/1137)) ([d98f729](https://github.com/kufu/smarthr-ui/commit/d98f7293b535b215237365fb87ce67004348175f))
* add background-color white ([#1260](https://github.com/kufu/smarthr-ui/issues/1260)) ([3caa554](https://github.com/kufu/smarthr-ui/commit/3caa554106fb76cd39f9ac412624334df68c27b0))
* add box-sizing: border-box to textarea ([#1060](https://github.com/kufu/smarthr-ui/issues/1060)) ([14e8f06](https://github.com/kufu/smarthr-ui/commit/14e8f06d2fc796b268fdac2fdc79681b797b067d))
* add optional chaining to _isChildPortal ([#1236](https://github.com/kufu/smarthr-ui/issues/1236)) ([6258036](https://github.com/kufu/smarthr-ui/commit/6258036bda429340b23abbbd0e67aa59e3560cc9))
* add type props to button ([#1086](https://github.com/kufu/smarthr-ui/issues/1086)) ([f603a16](https://github.com/kufu/smarthr-ui/commit/f603a16e680e6e025ddf2c95095eb2799dd82ed6))
* change disabled props to transient props ([#1092](https://github.com/kufu/smarthr-ui/issues/1092)) ([1af1390](https://github.com/kufu/smarthr-ui/commit/1af13904e73a827f74065975b2c803ed7278a638))
* change full-width space to half-width ([#1201](https://github.com/kufu/smarthr-ui/issues/1201)) ([889aa2b](https://github.com/kufu/smarthr-ui/commit/889aa2beac63b458504ff4c9613d203f4f1f3a7e))
* change loader animation ([#1173](https://github.com/kufu/smarthr-ui/issues/1173)) ([abddc8f](https://github.com/kufu/smarthr-ui/commit/abddc8f99190e585647a330f5d9ae877ac4ad8ae)), closes [/github.com/kufu/smarthr-ui/pull/1173#discussion_r532369303](https://github.com/kufu//github.com/kufu/smarthr-ui/pull/1173/issues/discussion_r532369303)
* change the minimum value of from props in the calendar component ([#1122](https://github.com/kufu/smarthr-ui/issues/1122)) ([5718806](https://github.com/kufu/smarthr-ui/commit/57188066ad7edda3632bd4591d94e7e6c6a0c362))
* change theme props to transient props ([#1081](https://github.com/kufu/smarthr-ui/issues/1081)) ([960bc98](https://github.com/kufu/smarthr-ui/commit/960bc980ac7d89ad7e3c953cb8ab90b109d88636))
* change to add aria-label to icon ([#1110](https://github.com/kufu/smarthr-ui/issues/1110)) ([3254aef](https://github.com/kufu/smarthr-ui/commit/3254aef5bd62aa88b7fd687798807f040ecd6dbc))
* change width props to temporary props ([#1089](https://github.com/kufu/smarthr-ui/issues/1089)) ([44bbe36](https://github.com/kufu/smarthr-ui/commit/44bbe364c8d7b5634dec738a2627b24d78caac5d))
* checkboxLabel where the label contains a "div" and "p" ([#1083](https://github.com/kufu/smarthr-ui/issues/1083)) ([96e6b69](https://github.com/kufu/smarthr-ui/commit/96e6b69e7d71d96f7d223f6dbe03569f10f45c0f))
* DatePicker bugs ([#1091](https://github.com/kufu/smarthr-ui/issues/1091)) ([11edaab](https://github.com/kufu/smarthr-ui/commit/11edaabc7b99e1b7e97eb0b636e1786e3a31ef12))
* dialog focus management ([#889](https://github.com/kufu/smarthr-ui/issues/889)) ([b9fde13](https://github.com/kufu/smarthr-ui/commit/b9fde131af353180fe7742fb34d9a65648bd8b22))
* fallback parentElement of svg element for IE ([#1241](https://github.com/kufu/smarthr-ui/issues/1241)) ([d4ae54e](https://github.com/kufu/smarthr-ui/commit/d4ae54e448fd1baa985b8c3f11556dfa468007ef))
* fix input width for firefox ([#1253](https://github.com/kufu/smarthr-ui/issues/1253)) ([d9fc669](https://github.com/kufu/smarthr-ui/commit/d9fc6695384c4263a6d00fc598f736054cc7eb3b))
* improve accessibility of MultiComboBox (SHRUI-207) ([#1187](https://github.com/kufu/smarthr-ui/issues/1187)) ([db30633](https://github.com/kufu/smarthr-ui/commit/db30633601ba48d69c8ad26bd87a914c7f6c4172))
* improve role of infomationpanel ([#1205](https://github.com/kufu/smarthr-ui/issues/1205)) ([116a3c4](https://github.com/kufu/smarthr-ui/commit/116a3c4b5e05bfae21ac992d049ff0235ec843e5))
* invalid html attribute ([#1095](https://github.com/kufu/smarthr-ui/issues/1095)) ([bb85bac](https://github.com/kufu/smarthr-ui/commit/bb85bac2df1a26e717010385a2a7e096ac3d444e))
* invalid html attribute ([#1106](https://github.com/kufu/smarthr-ui/issues/1106)) ([8732440](https://github.com/kufu/smarthr-ui/commit/87324403a7501c86e84386db60e7cf983a441532))
* make StatusLabel vertical center alignment  ([#879](https://github.com/kufu/smarthr-ui/issues/879)) ([34cc429](https://github.com/kufu/smarthr-ui/commit/34cc429d255a95c67ee7cc53875a25c1ef5899f5))
* modify auto format of CurrencyInput (SHRUI-145) ([#1143](https://github.com/kufu/smarthr-ui/issues/1143)) ([266a0bc](https://github.com/kufu/smarthr-ui/commit/266a0bc2cc11922addafffeec560bf234603236f))
* modify not to apply hover-style to Checkbox when hover over a disabled CheckboxLabel ([#1136](https://github.com/kufu/smarthr-ui/issues/1136)) ([0c662a3](https://github.com/kufu/smarthr-ui/commit/0c662a3f803513941df4e375dc4700888a38b520))
* pass undefined to accept instead of blank string ([#1121](https://github.com/kufu/smarthr-ui/issues/1121)) ([514d569](https://github.com/kufu/smarthr-ui/commit/514d569b38d27eaf8bdc590f7e961f6c52ace6ca))
* refactor Dropdown (SHRUI-221) ([#1126](https://github.com/kufu/smarthr-ui/issues/1126)) ([0b77df6](https://github.com/kufu/smarthr-ui/commit/0b77df6909d4f6dcb624463c9343c746a5587883))
* reflect feedback of SideNav (SHRUI-320) ([#1251](https://github.com/kufu/smarthr-ui/issues/1251)) ([b66441c](https://github.com/kufu/smarthr-ui/commit/b66441c486c8f2c8baffcc78c477655ac70956da))
* remove that blank optgroup is displayed for IE ([#1186](https://github.com/kufu/smarthr-ui/issues/1186)) ([06dc2db](https://github.com/kufu/smarthr-ui/commit/06dc2db71ef578e32ac783fb062dfc62baf02c2a))
* replace defaultPalette (SHRUI-233) ([#1153](https://github.com/kufu/smarthr-ui/issues/1153)) ([b323bd5](https://github.com/kufu/smarthr-ui/commit/b323bd584ea5c679e0e3d21cccc48072aa402cfc))
* replace div in button with span ([#1084](https://github.com/kufu/smarthr-ui/issues/1084)) ([8f1ed53](https://github.com/kufu/smarthr-ui/commit/8f1ed5304528bd1161d5429188bb903df096cddb))
* replace figurein button with span ([#1082](https://github.com/kufu/smarthr-ui/issues/1082)) ([4c0188f](https://github.com/kufu/smarthr-ui/commit/4c0188f32396f19cccbba9a20d5e9dbeda84f802))
* shifting of index when IndexNav's ListItem is inserted into a new line ([#1138](https://github.com/kufu/smarthr-ui/issues/1138)) ([6222f57](https://github.com/kufu/smarthr-ui/commit/6222f576824f5c108699b9a7613fd1f27f46d469))
* update package.json ([#1224](https://github.com/kufu/smarthr-ui/issues/1224)) ([976fb89](https://github.com/kufu/smarthr-ui/commit/976fb89f506bf83da309fcf606fe2fb08d321438))
* アコーディオンパネルの展開時に overflow を既定値に戻す ([#1125](https://github.com/kufu/smarthr-ui/issues/1125)) ([8d8069b](https://github.com/kufu/smarthr-ui/commit/8d8069b05672165943ef17080c17696108a17872))

## [12.0.0-0](https://github.com/kufu/smarthr-ui/compare/v11.1.0...v12.0.0-0) (2020-12-17)


### ⚠ BREAKING CHANGES

* change loader animation (#1173)
* remove shinColorPalette
* add type props to button (#1086)

### Features

* add "from" and "to" props to DatePicker component ([#1123](https://github.com/kufu/smarthr-ui/issues/1123)) ([7f841e0](https://github.com/kufu/smarthr-ui/commit/7f841e08964fc1c912d2e3d042015f04e254deb6))
* add blukActionArea in Head of Table (SHRUI-8) ([#937](https://github.com/kufu/smarthr-ui/issues/937)) ([bf0158a](https://github.com/kufu/smarthr-ui/commit/bf0158acb176fc42be5e9365b996b1998db12f70))
* add border style to MessageDialog ([#1059](https://github.com/kufu/smarthr-ui/issues/1059)) ([add5da7](https://github.com/kufu/smarthr-ui/commit/add5da754c47190bacf6d69c9ae6b88dd34ec0cf))
* add darkenAmount argument to hoverColor method ([#950](https://github.com/kufu/smarthr-ui/issues/950)) ([7d78586](https://github.com/kufu/smarthr-ui/commit/7d78586cc9073c3ac4fd998169e285f3ac72f6e4))
* add hasBlank and blankLabel props to Select ([#1061](https://github.com/kufu/smarthr-ui/issues/1061)) ([165e104](https://github.com/kufu/smarthr-ui/commit/165e1049083ae19dab9d2ee5030375130aa3700b))
* add Shin color (SHRUI-227) ([#1141](https://github.com/kufu/smarthr-ui/issues/1141)) ([1c8063a](https://github.com/kufu/smarthr-ui/commit/1c8063ac92543f54b4046efc7d9f12a177cb891b))
* add SideNav component ([#1142](https://github.com/kufu/smarthr-ui/issues/1142)) ([6bae12c](https://github.com/kufu/smarthr-ui/commit/6bae12c4e24360e839f55a1f9f2789de75681d47)), closes [/github.com/kufu/smarthr-ui/pull/1142#discussion_r533174306](https://github.com/kufu//github.com/kufu/smarthr-ui/pull/1142/issues/discussion_r533174306)
* change the attribute of radius ([#1080](https://github.com/kufu/smarthr-ui/issues/1080)) ([0e5bb8f](https://github.com/kufu/smarthr-ui/commit/0e5bb8fc47268ac96f86a5d7d876f9fee9e34786))
* expose Icon components individually ([#1127](https://github.com/kufu/smarthr-ui/issues/1127)) ([f7e716b](https://github.com/kufu/smarthr-ui/commit/f7e716b019488f267caae733dbfc80f9d14a9cab))
* fix style of disabling selectbox ([#1184](https://github.com/kufu/smarthr-ui/issues/1184)) ([04f0240](https://github.com/kufu/smarthr-ui/commit/04f0240946bac8764d397d215f79fd7156e8febb))
* support React v17 ([#1151](https://github.com/kufu/smarthr-ui/issues/1151)) ([dc23011](https://github.com/kufu/smarthr-ui/commit/dc23011ad7db3eca02c1c5ea6e0dbe0af4da8367))


### Bug Fixes

*  invalid html width attribute ([#1105](https://github.com/kufu/smarthr-ui/issues/1105)) ([1061356](https://github.com/kufu/smarthr-ui/commit/1061356fdd9b4849740f0b7515cb34193d13676a))
* add aria and role attributes to dialog ([#1033](https://github.com/kufu/smarthr-ui/issues/1033)) ([92561f3](https://github.com/kufu/smarthr-ui/commit/92561f388350f5398afd7efea317527134a3e983)), closes [/github.com/kufu/smarthr-ui/pull/1033#discussion_r529388476](https://github.com/kufu//github.com/kufu/smarthr-ui/pull/1033/issues/discussion_r529388476)
* add aria and role attributes to Pagenation ([#1124](https://github.com/kufu/smarthr-ui/issues/1124)) ([8a5ac30](https://github.com/kufu/smarthr-ui/commit/8a5ac30ade05b68e08ad414573bab0aaffdc184c))
* add aria-checked to checkbox ([#1029](https://github.com/kufu/smarthr-ui/issues/1029)) ([69dfed1](https://github.com/kufu/smarthr-ui/commit/69dfed1262dc1197984caf202b48b9a013b30f23))
* add aria-controls to accordion button triggers for Change default Expanded ([#1140](https://github.com/kufu/smarthr-ui/issues/1140)) ([8d366c2](https://github.com/kufu/smarthr-ui/commit/8d366c258d09ef4476e17f5c34c832497cf97978))
* add aria-describedby ([#1137](https://github.com/kufu/smarthr-ui/issues/1137)) ([d98f729](https://github.com/kufu/smarthr-ui/commit/d98f7293b535b215237365fb87ce67004348175f))
* add box-sizing: border-box to textarea ([#1060](https://github.com/kufu/smarthr-ui/issues/1060)) ([14e8f06](https://github.com/kufu/smarthr-ui/commit/14e8f06d2fc796b268fdac2fdc79681b797b067d))
* add optional chaining to _isChildPortal ([#1236](https://github.com/kufu/smarthr-ui/issues/1236)) ([6258036](https://github.com/kufu/smarthr-ui/commit/6258036bda429340b23abbbd0e67aa59e3560cc9))
* add type props to button ([#1086](https://github.com/kufu/smarthr-ui/issues/1086)) ([f603a16](https://github.com/kufu/smarthr-ui/commit/f603a16e680e6e025ddf2c95095eb2799dd82ed6))
* change disabled props to transient props ([#1092](https://github.com/kufu/smarthr-ui/issues/1092)) ([1af1390](https://github.com/kufu/smarthr-ui/commit/1af13904e73a827f74065975b2c803ed7278a638))
* change full-width space to half-width ([#1201](https://github.com/kufu/smarthr-ui/issues/1201)) ([889aa2b](https://github.com/kufu/smarthr-ui/commit/889aa2beac63b458504ff4c9613d203f4f1f3a7e))
* change loader animation ([#1173](https://github.com/kufu/smarthr-ui/issues/1173)) ([abddc8f](https://github.com/kufu/smarthr-ui/commit/abddc8f99190e585647a330f5d9ae877ac4ad8ae)), closes [/github.com/kufu/smarthr-ui/pull/1173#discussion_r532369303](https://github.com/kufu//github.com/kufu/smarthr-ui/pull/1173/issues/discussion_r532369303)
* change the minimum value of from props in the calendar component ([#1122](https://github.com/kufu/smarthr-ui/issues/1122)) ([5718806](https://github.com/kufu/smarthr-ui/commit/57188066ad7edda3632bd4591d94e7e6c6a0c362))
* change theme props to transient props ([#1081](https://github.com/kufu/smarthr-ui/issues/1081)) ([960bc98](https://github.com/kufu/smarthr-ui/commit/960bc980ac7d89ad7e3c953cb8ab90b109d88636))
* change to add aria-label to icon ([#1110](https://github.com/kufu/smarthr-ui/issues/1110)) ([3254aef](https://github.com/kufu/smarthr-ui/commit/3254aef5bd62aa88b7fd687798807f040ecd6dbc))
* change width props to temporary props ([#1089](https://github.com/kufu/smarthr-ui/issues/1089)) ([44bbe36](https://github.com/kufu/smarthr-ui/commit/44bbe364c8d7b5634dec738a2627b24d78caac5d))
* checkboxLabel where the label contains a "div" and "p" ([#1083](https://github.com/kufu/smarthr-ui/issues/1083)) ([96e6b69](https://github.com/kufu/smarthr-ui/commit/96e6b69e7d71d96f7d223f6dbe03569f10f45c0f))
* DatePicker bugs ([#1091](https://github.com/kufu/smarthr-ui/issues/1091)) ([11edaab](https://github.com/kufu/smarthr-ui/commit/11edaabc7b99e1b7e97eb0b636e1786e3a31ef12))
* dialog focus management ([#889](https://github.com/kufu/smarthr-ui/issues/889)) ([b9fde13](https://github.com/kufu/smarthr-ui/commit/b9fde131af353180fe7742fb34d9a65648bd8b22))
* improve accessibility of MultiComboBox (SHRUI-207) ([#1187](https://github.com/kufu/smarthr-ui/issues/1187)) ([db30633](https://github.com/kufu/smarthr-ui/commit/db30633601ba48d69c8ad26bd87a914c7f6c4172))
* improve role of infomationpanel ([#1205](https://github.com/kufu/smarthr-ui/issues/1205)) ([116a3c4](https://github.com/kufu/smarthr-ui/commit/116a3c4b5e05bfae21ac992d049ff0235ec843e5))
* invalid html attribute ([#1095](https://github.com/kufu/smarthr-ui/issues/1095)) ([bb85bac](https://github.com/kufu/smarthr-ui/commit/bb85bac2df1a26e717010385a2a7e096ac3d444e))
* invalid html attribute ([#1106](https://github.com/kufu/smarthr-ui/issues/1106)) ([8732440](https://github.com/kufu/smarthr-ui/commit/87324403a7501c86e84386db60e7cf983a441532))
* make StatusLabel vertical center alignment  ([#879](https://github.com/kufu/smarthr-ui/issues/879)) ([34cc429](https://github.com/kufu/smarthr-ui/commit/34cc429d255a95c67ee7cc53875a25c1ef5899f5))
* modify auto format of CurrencyInput (SHRUI-145) ([#1143](https://github.com/kufu/smarthr-ui/issues/1143)) ([266a0bc](https://github.com/kufu/smarthr-ui/commit/266a0bc2cc11922addafffeec560bf234603236f))
* modify not to apply hover-style to Checkbox when hover over a disabled CheckboxLabel ([#1136](https://github.com/kufu/smarthr-ui/issues/1136)) ([0c662a3](https://github.com/kufu/smarthr-ui/commit/0c662a3f803513941df4e375dc4700888a38b520))
* pass undefined to accept instead of blank string ([#1121](https://github.com/kufu/smarthr-ui/issues/1121)) ([514d569](https://github.com/kufu/smarthr-ui/commit/514d569b38d27eaf8bdc590f7e961f6c52ace6ca))
* refactor Dropdown (SHRUI-221) ([#1126](https://github.com/kufu/smarthr-ui/issues/1126)) ([0b77df6](https://github.com/kufu/smarthr-ui/commit/0b77df6909d4f6dcb624463c9343c746a5587883))
* remove that blank optgroup is displayed for IE ([#1186](https://github.com/kufu/smarthr-ui/issues/1186)) ([06dc2db](https://github.com/kufu/smarthr-ui/commit/06dc2db71ef578e32ac783fb062dfc62baf02c2a))
* replace defaultPalette (SHRUI-233) ([#1153](https://github.com/kufu/smarthr-ui/issues/1153)) ([b323bd5](https://github.com/kufu/smarthr-ui/commit/b323bd584ea5c679e0e3d21cccc48072aa402cfc))
* replace div in button with span ([#1084](https://github.com/kufu/smarthr-ui/issues/1084)) ([8f1ed53](https://github.com/kufu/smarthr-ui/commit/8f1ed5304528bd1161d5429188bb903df096cddb))
* replace figurein button with span ([#1082](https://github.com/kufu/smarthr-ui/issues/1082)) ([4c0188f](https://github.com/kufu/smarthr-ui/commit/4c0188f32396f19cccbba9a20d5e9dbeda84f802))
* shifting of index when IndexNav's ListItem is inserted into a new line ([#1138](https://github.com/kufu/smarthr-ui/issues/1138)) ([6222f57](https://github.com/kufu/smarthr-ui/commit/6222f576824f5c108699b9a7613fd1f27f46d469))
* update package.json ([#1224](https://github.com/kufu/smarthr-ui/issues/1224)) ([976fb89](https://github.com/kufu/smarthr-ui/commit/976fb89f506bf83da309fcf606fe2fb08d321438))
* アコーディオンパネルの展開時に overflow を既定値に戻す ([#1125](https://github.com/kufu/smarthr-ui/issues/1125)) ([8d8069b](https://github.com/kufu/smarthr-ui/commit/8d8069b05672165943ef17080c17696108a17872))

## [11.2.0](https://github.com/kufu/smarthr-ui/compare/v11.1.0...v11.2.0) (2020-11-26)


### Features

* add Shin color (SHRUI-227) ([#1141](https://github.com/kufu/smarthr-ui/issues/1141)) ([#1154](https://github.com/kufu/smarthr-ui/issues/1154)) ([db08ce4](https://github.com/kufu/smarthr-ui/commit/db08ce47b2fb2eb8985b295e9470974842ee948a))

## [11.1.0](https://github.com/kufu/smarthr-ui/compare/v11.0.0-0...v11.1.0) (2020-10-28)


### Features

* add InputFIle (SHRUI-156) ([#1066](https://github.com/kufu/smarthr-ui/issues/1066)) ([0c92755](https://github.com/kufu/smarthr-ui/commit/0c92755393dade4810b6f8e73061e88f8bffdafb))


### Bug Fixes

* a11y of Dropdown (SHRUI-180) ([#1050](https://github.com/kufu/smarthr-ui/issues/1050)) ([a413acf](https://github.com/kufu/smarthr-ui/commit/a413acf50fb8ae3abea69bcd775ea60c396ecc0b))
* apply changes of release v11.0.0 ([#1090](https://github.com/kufu/smarthr-ui/issues/1090)) ([9cf6ded](https://github.com/kufu/smarthr-ui/commit/9cf6ded78a5cb2437eccb354122f3ca7b4d4a584)), closes [#1085](https://github.com/kufu/smarthr-ui/issues/1085) [#1087](https://github.com/kufu/smarthr-ui/issues/1087)
* change Cell height ([#976](https://github.com/kufu/smarthr-ui/issues/976)) ([0ad828c](https://github.com/kufu/smarthr-ui/commit/0ad828c725ce91d9d42939c6a608ac236c85c630))
* change SmartHR Logo props to temporary props ([#1094](https://github.com/kufu/smarthr-ui/issues/1094)) ([91b509a](https://github.com/kufu/smarthr-ui/commit/91b509a1e2a1b13ea53afbabc84f480d116fb4c9))
* change tag of calendar component ([#1088](https://github.com/kufu/smarthr-ui/issues/1088)) ([ba87935](https://github.com/kufu/smarthr-ui/commit/ba87935cf3ffad2f987a4e62df9fe60b70761561))
* change tertiary link in Bottom Fixed Area to correct HTML ([#1065](https://github.com/kufu/smarthr-ui/issues/1065)) ([b023dfd](https://github.com/kufu/smarthr-ui/commit/b023dfd860fa258854f416279514e82d1cb3f6fc))
* change theme props to transient props ([#1069](https://github.com/kufu/smarthr-ui/issues/1069)) ([beaff5c](https://github.com/kufu/smarthr-ui/commit/beaff5cad6ca3a908dbdbd6cb4c8af31799b8d1a))
* change to see the content overflowing in the vertical direction of MessageScreen ([#1058](https://github.com/kufu/smarthr-ui/issues/1058)) ([773fd15](https://github.com/kufu/smarthr-ui/commit/773fd15631be8a9f279a98742c492b0bfc052614))
* change to unify the notation in the README ([#1068](https://github.com/kufu/smarthr-ui/issues/1068)) ([c8e515c](https://github.com/kufu/smarthr-ui/commit/c8e515c9a17f551f42b30499924acad8a986aec0))
* enable to use MultiComboBox on Dropdown ([#1067](https://github.com/kufu/smarthr-ui/issues/1067)) ([0d9fe7f](https://github.com/kufu/smarthr-ui/commit/0d9fe7fb2c63fd5dcdf947f2f43b46f856254537))
* support webpack v5 ([#1057](https://github.com/kufu/smarthr-ui/issues/1057)) ([3d8d14e](https://github.com/kufu/smarthr-ui/commit/3d8d14ee9d1ae19f051cad95a57156370a5168c1))

## [11.0.0](https://github.com/kufu/smarthr-ui/compare/v11.0.0-1...v11.0.0) (2020-10-22)

## [11.0.0-1](https://github.com/kufu/smarthr-ui/compare/v11.0.0-0...v11.0.0-1) (2020-10-21)


### Bug Fixes

* calculate Calendar position in DatePicker (SHRUI-212) ([#1085](https://github.com/kufu/smarthr-ui/issues/1085)) ([eeb9bda](https://github.com/kufu/smarthr-ui/commit/eeb9bda4b144705d6681658f1b1a7e5c46ea4fdf))
* consider reset css in BackgroundJobsPanel (SHRUI-213) ([#1087](https://github.com/kufu/smarthr-ui/issues/1087)) ([9bbc279](https://github.com/kufu/smarthr-ui/commit/9bbc27998d9bec16a4fc0acaaa6cd639a595e8c3))

## [11.0.0-0](https://github.com/kufu/smarthr-ui/compare/v10.0.0...v11.0.0-0) (2020-10-12)


### ⚠ BREAKING CHANGES

* change props of DatePicker drastically, and remove
parsing error.

* fix: typo

* fix: ref in custom hook

* docs: update README
* Remove id property from Tooltip component

* fix: change prefix to sequence number

### Features

* add BackgroundJobsPanel (SHRUI-116) ([#975](https://github.com/kufu/smarthr-ui/issues/975)) ([9a1ae65](https://github.com/kufu/smarthr-ui/commit/9a1ae659086ed31abbb9387178031a9cd39dd7f9))
* add SegmentedControl (SHRUI-115) ([#949](https://github.com/kufu/smarthr-ui/issues/949)) ([36ea094](https://github.com/kufu/smarthr-ui/commit/36ea094cf1f2dd5b426d53153b04c9bcbc3af9d5))
* add style for visually hidden ([#963](https://github.com/kufu/smarthr-ui/issues/963)) ([fda4ccf](https://github.com/kufu/smarthr-ui/commit/fda4ccf5e72957c8070f1009aefb4bb14f140515))
* add useId hook and remove id property from Tooltip ([#974](https://github.com/kufu/smarthr-ui/issues/974)) ([f638d6b](https://github.com/kufu/smarthr-ui/commit/f638d6b4bb14450640f90b580218793e27843df7))
* add visually hidden text for some components ([#1016](https://github.com/kufu/smarthr-ui/issues/1016)) ([39c85c7](https://github.com/kufu/smarthr-ui/commit/39c85c7e83bb3af461c082ac4245b1299aa955ce))
* change addon order ([#1041](https://github.com/kufu/smarthr-ui/issues/1041)) ([29bde4c](https://github.com/kufu/smarthr-ui/commit/29bde4c33390ecb520c912ec4643dd801213403a))
* create shadow theme ([#1004](https://github.com/kufu/smarthr-ui/issues/1004)) ([e194e01](https://github.com/kufu/smarthr-ui/commit/e194e017626337638a9af7645f7034f47193e737))
* create zIndex theme ([#1026](https://github.com/kufu/smarthr-ui/issues/1026)) ([0f190ab](https://github.com/kufu/smarthr-ui/commit/0f190ab99476b3620298436b6a3571bed988144a))


### Bug Fixes

* a11y of Calendar ([#1035](https://github.com/kufu/smarthr-ui/issues/1035)) ([45ed373](https://github.com/kufu/smarthr-ui/commit/45ed37332868a8f5df68449a96c8e8de68d42c10))
* add ARIA attributes into Pagination ([#1032](https://github.com/kufu/smarthr-ui/issues/1032)) ([32f1e3f](https://github.com/kufu/smarthr-ui/commit/32f1e3f25fca91ffd0525e4e80dffa6e223dc974))
* add aria-label to MessageScreen ([#1018](https://github.com/kufu/smarthr-ui/issues/1018)) ([ef56e37](https://github.com/kufu/smarthr-ui/commit/ef56e377984e8c199ca7eaa5156f1b4f5df26406))
* add aria-label to SmartHR Logo ([#1019](https://github.com/kufu/smarthr-ui/issues/1019)) ([5507618](https://github.com/kufu/smarthr-ui/commit/55076180a67f542b05e48ad13db73badd95dda56))
* add blank optgroup for not omitting labels for Mobile Safari ([#979](https://github.com/kufu/smarthr-ui/issues/979)) ([87eaa1b](https://github.com/kufu/smarthr-ui/commit/87eaa1b59ceddefccab713da68c931e683962d11))
* add css to show disabled input value ([#1028](https://github.com/kufu/smarthr-ui/issues/1028)) ([1547580](https://github.com/kufu/smarthr-ui/commit/154758027b2bf29d9524ef7f00f1d6adadaa850c))
* add role attribute and visually hidden text ([#1015](https://github.com/kufu/smarthr-ui/issues/1015)) ([536e304](https://github.com/kufu/smarthr-ui/commit/536e30470e5b413ca14bedc4cf644ad9a7c6112f))
* add role attribute to tooltip ([#1045](https://github.com/kufu/smarthr-ui/issues/1045)) ([d67fb3d](https://github.com/kufu/smarthr-ui/commit/d67fb3d1523e1e8a42ba42428591cb7d20e3a4ab))
* change not to add aria-expanded when InformationPanel has no toggle button ([#1046](https://github.com/kufu/smarthr-ui/issues/1046)) ([ffe8652](https://github.com/kufu/smarthr-ui/commit/ffe8652782bd36015787f8e8700a8a5f3353ac04))
* DatePicker (SHRUI-178) ([#1027](https://github.com/kufu/smarthr-ui/issues/1027)) ([3c94f19](https://github.com/kufu/smarthr-ui/commit/3c94f19211b4db465267411e1f6ff2a3d10125e8))
* enable to ignore Icon what has no labels (SHRUI-148) ([#1031](https://github.com/kufu/smarthr-ui/issues/1031)) ([bf12672](https://github.com/kufu/smarthr-ui/commit/bf126727d59754be102932a1b4ac0f2d78cd2358))
* fix styles of Calendar when using reset style ([#973](https://github.com/kufu/smarthr-ui/issues/973)) ([3e790b2](https://github.com/kufu/smarthr-ui/commit/3e790b255b38414e3681ed6c4d84253f8b33a9e7))
* move frame styles to Wrapper ([#985](https://github.com/kufu/smarthr-ui/issues/985)) ([b9de4e4](https://github.com/kufu/smarthr-ui/commit/b9de4e4f607e4a352e43ce17512be9c48d35afe2))
* nested Dropdown ([#1003](https://github.com/kufu/smarthr-ui/issues/1003)) ([6f648df](https://github.com/kufu/smarthr-ui/commit/6f648df61d3e2140a156f0692f866d9be3901fb9))
* stylelint ([#1034](https://github.com/kufu/smarthr-ui/issues/1034)) ([a6a23e4](https://github.com/kufu/smarthr-ui/commit/a6a23e46161023d59d7841bbbc76df480f4cd61f))
* update font-family ([#930](https://github.com/kufu/smarthr-ui/issues/930)) ([ff7c7f3](https://github.com/kufu/smarthr-ui/commit/ff7c7f3a64f170ea76fdc94ab57dea4dc4c90ad8))

## [10.1.0](https://github.com/kufu/smarthr-ui/compare/v10.0.0...v10.1.0) (2020-11-24)


### Features

* backport Shin Color to v10 (SHRUI-232) ([#1155](https://github.com/kufu/smarthr-ui/issues/1155)) ([1b551e1](https://github.com/kufu/smarthr-ui/commit/1b551e107674209966083cbacf89ccc6a11b4a3b)), closes [#1141](https://github.com/kufu/smarthr-ui/issues/1141)

## [10.0.0](https://github.com/kufu/smarthr-ui/compare/v9.3.0...v10.0.0) (2020-08-31)


### ⚠ BREAKING CHANGES

* reconsider border radius of theme (#849)
* Tooltip become portal, and become to require id property

### Features

* add DatePicker ([#910](https://github.com/kufu/smarthr-ui/issues/910)) ([8e400fc](https://github.com/kufu/smarthr-ui/commit/8e400fca421517b139ba12f8fb21e98f56f688a9))
* added SVGAttributes and role attributes to props ([#909](https://github.com/kufu/smarthr-ui/issues/909)) ([d975191](https://github.com/kufu/smarthr-ui/commit/d975191b9432663828ec8216932f00a5f253fe43))


### Bug Fixes

* add role in FlashMessage ([#940](https://github.com/kufu/smarthr-ui/issues/940)) ([56e1e2e](https://github.com/kufu/smarthr-ui/commit/56e1e2e8e22a6b01689f6c8d819f301bf09a25cf))
* reconsider border radius of theme ([#849](https://github.com/kufu/smarthr-ui/issues/849)) ([02e21ca](https://github.com/kufu/smarthr-ui/commit/02e21caae2a77adc61b17200c895a48c4a73c7af))


* BREAKING CHANGE: change Tooltip to portal (#900) ([b4a3a9d](https://github.com/kufu/smarthr-ui/commit/b4a3a9d20a71793b479b6f988ac4833871753660)), closes [#900](https://github.com/kufu/smarthr-ui/issues/900)

## [9.4.0](https://github.com/kufu/smarthr-ui/compare/v9.3.0...v9.4.0) (2020-11-26)


### Features

* backport Shin Color to v9 (SHRUI-232) ([#1156](https://github.com/kufu/smarthr-ui/issues/1156)) ([88ff431](https://github.com/kufu/smarthr-ui/commit/88ff431c056aec6f6a8fd0872226d3b55c77b1e5)), closes [#1141](https://github.com/kufu/smarthr-ui/issues/1141)

## [9.3.0](https://github.com/kufu/smarthr-ui/compare/v9.2.0...v9.3.0) (2020-08-11)


### Features

* add maxlength attribute and text counter to textarea ([#877](https://github.com/kufu/smarthr-ui/issues/877)) ([9ae5142](https://github.com/kufu/smarthr-ui/commit/9ae5142bb4f766a6f0a2c1e0488f710e10fd0366))


### Bug Fixes

* add necessary dependencies of hooks ([#906](https://github.com/kufu/smarthr-ui/issues/906)) ([a14e2c0](https://github.com/kufu/smarthr-ui/commit/a14e2c0adae7853d1ba153ef9215519e67eecd8f))
* fix applying className ([#890](https://github.com/kufu/smarthr-ui/issues/890)) ([a950f0c](https://github.com/kufu/smarthr-ui/commit/a950f0c2e9cd1b3a9cd82cf7dc0c71ce97d5afec))
* TabBar for IE support ([#854](https://github.com/kufu/smarthr-ui/issues/854)) ([adb0fc3](https://github.com/kufu/smarthr-ui/commit/adb0fc3cf0715e36b19e0ce05f5824d1b556281e))
* typographical error ([#920](https://github.com/kufu/smarthr-ui/issues/920)) ([0e30876](https://github.com/kufu/smarthr-ui/commit/0e30876b50f5c34a67e661b0b35d85013394c9f6))
* width for input element in Input ([#905](https://github.com/kufu/smarthr-ui/issues/905)) ([b77046f](https://github.com/kufu/smarthr-ui/commit/b77046fdc221ba07c814714104735e2f4ae996a1))

## [9.2.0](https://github.com/kufu/smarthr-ui/compare/v9.1.0...v9.2.0) (2020-07-15)


### Features

* add affixes into Input ([#851](https://github.com/kufu/smarthr-ui/issues/851)) ([f95c8ec](https://github.com/kufu/smarthr-ui/commit/f95c8ecbad568fe4739b4a3dd927722109375be8))
* add Calendar component ([#832](https://github.com/kufu/smarthr-ui/issues/832)) ([0990e38](https://github.com/kufu/smarthr-ui/commit/0990e38d8f8716795e0c82599245625412574c61))
* add IndexNav component ([#838](https://github.com/kufu/smarthr-ui/issues/838)) ([6ce3c6a](https://github.com/kufu/smarthr-ui/commit/6ce3c6a43ecc1a5a429566402e8d60aaba19f9fd))


### Bug Fixes

* add className props to RightFixedNote and RightFixedNoteItem ([#865](https://github.com/kufu/smarthr-ui/issues/865)) ([a861eed](https://github.com/kufu/smarthr-ui/commit/a861eed4f20205a882d7cd7580fd2099d33d91da))
* change flex to long-hand in FlashMessage ([#852](https://github.com/kufu/smarthr-ui/issues/852)) ([e2817e1](https://github.com/kufu/smarthr-ui/commit/e2817e16b0a10da954b3cce614fc77fb0579eeb8))
* change not to pass unnecessary props to Background ([#862](https://github.com/kufu/smarthr-ui/issues/862)) ([9dd9c2f](https://github.com/kufu/smarthr-ui/commit/9dd9c2f905a5738dfeef987f9044db2b0052a8af))
* change not to use rowSpan=0 ([#861](https://github.com/kufu/smarthr-ui/issues/861)) ([6f829c0](https://github.com/kufu/smarthr-ui/commit/6f829c02fccaf06f6acd92953a84654320be863c))
* correct ms-expand of Select ([#853](https://github.com/kufu/smarthr-ui/issues/853)) ([9b2811b](https://github.com/kufu/smarthr-ui/commit/9b2811bf72d123a052310e83b8eb4a0e89b7b94c))
* fix calendar date in storybook ([#863](https://github.com/kufu/smarthr-ui/issues/863)) ([f4bac46](https://github.com/kufu/smarthr-ui/commit/f4bac461689f135d6a50c5a183171e924f1c4a08))
* position shift of scrollable DropdownContent ([#841](https://github.com/kufu/smarthr-ui/issues/841)) ([07786eb](https://github.com/kufu/smarthr-ui/commit/07786eb8a2ca7da579d001def098f47bec8b1bab))
* validate tags in RadioButton/RadioButtonLabel ([#837](https://github.com/kufu/smarthr-ui/issues/837)) ([21c10d8](https://github.com/kufu/smarthr-ui/commit/21c10d8eef56f95a283ce2ab6854d0198868501b))

## [9.1.0](https://github.com/kufu/smarthr-ui/compare/v9.0.2...v9.1.0) (2020-06-17)


### Features

* add currency mode into Input ([#822](https://github.com/kufu/smarthr-ui/issues/822)) ([0cd3c32](https://github.com/kufu/smarthr-ui/commit/0cd3c323884a706891b0ec4f7e0ab35c1f2c7840))
* add FilterDropdown ([#825](https://github.com/kufu/smarthr-ui/issues/825)) ([b2e94fc](https://github.com/kufu/smarthr-ui/commit/b2e94fc01579b41d5c6b13280023b97783935d15))


### Bug Fixes

* change cache key ([#831](https://github.com/kufu/smarthr-ui/issues/831)) ([abec6b7](https://github.com/kufu/smarthr-ui/commit/abec6b7e4d242dad552e5d37815478a31883cbf9))

### [9.0.2](https://github.com/kufu/smarthr-ui/compare/v9.0.1...v9.0.2) (2020-06-10)


### Bug Fixes

* pass other props to AppNaviCustomTag ([#829](https://github.com/kufu/smarthr-ui/issues/829)) ([77b260b](https://github.com/kufu/smarthr-ui/commit/77b260b8653e7321fdfad56e800002185bf8cc26))

### [9.0.1](https://github.com/kufu/smarthr-ui/compare/v9.0.0...v9.0.1) (2020-06-10)


### Bug Fixes

* fix props type for AppNavi ([#828](https://github.com/kufu/smarthr-ui/issues/828)) ([57ff40b](https://github.com/kufu/smarthr-ui/commit/57ff40b1404187c8ff91fb100b05f6a4777e419c))
* use stylelint-config-smarthr for stylelint ([#806](https://github.com/kufu/smarthr-ui/issues/806)) ([b25debd](https://github.com/kufu/smarthr-ui/commit/b25debd5a1d677953258f21e1e10a574f099c3f3))

## [9.0.0](https://github.com/kufu/smarthr-ui/compare/v8.4.0...v9.0.0) (2020-06-09)


### ⚠ BREAKING CHANGES

* it is no longer disabled by default when passing true for current props
* feat: add buttons props types for AppNavi component
* fix: add AppNavi test
* fix: add README of AppNavi
* feat: add disabled props for AppNavi items
* remove background color from TabBar

* fix: remove background color

* test: update snapshot

### Features

* add buttons props types for AppNavi component ([#826](https://github.com/kufu/smarthr-ui/issues/826)) ([ed3a138](https://github.com/kufu/smarthr-ui/commit/ed3a1388fd20cd528301bc1857d0d58fd1b7f3e9))
* add togglable option in InformationPanel ([#817](https://github.com/kufu/smarthr-ui/issues/817)) ([5df6953](https://github.com/kufu/smarthr-ui/commit/5df695383e927f96b7750f4ca5ad0c9df277c039))


### Bug Fixes

* fix typo Heading default type ([#815](https://github.com/kufu/smarthr-ui/issues/815)) ([2b54b88](https://github.com/kufu/smarthr-ui/commit/2b54b88774aa54708b47746ee780eee3b8131af2))
* improve TextButton broder-color to transparent ([#813](https://github.com/kufu/smarthr-ui/issues/813)) ([299de50](https://github.com/kufu/smarthr-ui/commit/299de504d56b8da68819b1c71fcd102580b16880))
* lower 'th' details in 'Table' ([#816](https://github.com/kufu/smarthr-ui/issues/816)) ([0dcf86a](https://github.com/kufu/smarthr-ui/commit/0dcf86ae4ab351441247a5ca8ef08096982848c0))
* remove background color from TabBar ([#820](https://github.com/kufu/smarthr-ui/issues/820)) ([4ea3e8f](https://github.com/kufu/smarthr-ui/commit/4ea3e8fea6ff1c05ce538ab2f9d2a10697dde8e2))

## [8.4.0](https://github.com/kufu/smarthr-ui/compare/v8.3.0...v8.4.0) (2020-06-03)


### Features

* Add BottomFixedArea component ([#777](https://github.com/kufu/smarthr-ui/issues/777)) ([486bb57](https://github.com/kufu/smarthr-ui/commit/486bb5768f07739b518a928021c0d81671f3772f))


### Bug Fixes

* scrollbar visibility in dropdown ([#805](https://github.com/kufu/smarthr-ui/issues/805)) ([a173cbf](https://github.com/kufu/smarthr-ui/commit/a173cbfd44b2ceb1c318a491564202addafce094))

## [8.3.0](https://github.com/kufu/smarthr-ui/compare/v8.2.0...v8.3.0) (2020-05-28)


### Features

* add aria attribute ([#788](https://github.com/kufu/smarthr-ui/issues/788)) ([c936320](https://github.com/kufu/smarthr-ui/commit/c936320a1a775cecb2b858a3a758393c134804f1))
* add labelSuffix props to FieldSet component ([#769](https://github.com/kufu/smarthr-ui/issues/769)) ([01eea8b](https://github.com/kufu/smarthr-ui/commit/01eea8be4770edb3f1d4c3e07df0a5631b4307cb))
* add MessageScreen Component ([#768](https://github.com/kufu/smarthr-ui/issues/768)) ([fb9a27e](https://github.com/kufu/smarthr-ui/commit/fb9a27ebffbab7abd2a23c125d3dd963a50e5771))
* add width and height props to SmartHRLogo ([#767](https://github.com/kufu/smarthr-ui/issues/767)) ([3c93eb2](https://github.com/kufu/smarthr-ui/commit/3c93eb23bec6191af18e8c9f89a98c6edd37728b))
* fade out Dialog component ([#776](https://github.com/kufu/smarthr-ui/issues/776)) ([9adc249](https://github.com/kufu/smarthr-ui/commit/9adc249297b31b8c2e282be5108f19fbe2f1eeea))
* nullable cell option ([#754](https://github.com/kufu/smarthr-ui/issues/754)) ([b16624d](https://github.com/kufu/smarthr-ui/commit/b16624da16ad74708c88374aa0ed52bf9b291b21))


### Bug Fixes

* button style ([#790](https://github.com/kufu/smarthr-ui/issues/790)) ([6ab20b7](https://github.com/kufu/smarthr-ui/commit/6ab20b71696ca7a89d8a0f4b716ad07a1529f285))
* enable multiple error messages for FieldSet ([#782](https://github.com/kufu/smarthr-ui/issues/782)) ([6a37c72](https://github.com/kufu/smarthr-ui/commit/6a37c72e5d16b9abb9c72997c09df0b3a624ac35))
* round the corners of table on base ([#766](https://github.com/kufu/smarthr-ui/issues/766)) ([affc1f9](https://github.com/kufu/smarthr-ui/commit/affc1f93b7a5ff4fe7f2590c8ce931fef17b66ad))
* set appear animation for Dialog ([#792](https://github.com/kufu/smarthr-ui/issues/792)) ([e6c992b](https://github.com/kufu/smarthr-ui/commit/e6c992ba6a8a274be4700b0de3ee28fcec642917))

## [8.2.0](https://github.com/kufu/smarthr-ui/compare/v8.1.0...v8.2.0) (2020-05-07)


### Features

* add tooltip component ([#738](https://github.com/kufu/smarthr-ui/issues/738)) ([dc1e2ee](https://github.com/kufu/smarthr-ui/commit/dc1e2eec09ae5d6801ed65f5df862d463a0af0f7))


### Bug Fixes

* Fix the polished version ([#765](https://github.com/kufu/smarthr-ui/issues/765)) ([bddfaab](https://github.com/kufu/smarthr-ui/commit/bddfaab037fac19bfed915356ab01a97c4005b93))
* change SecondaryButton disabled style ([#757](https://github.com/kufu/smarthr-ui/issues/757)) ([d3c2ba1](https://github.com/kufu/smarthr-ui/commit/d3c2ba1540ed4a67922a695d25f552027257c263))
* change storybook dropdown style ([#740](https://github.com/kufu/smarthr-ui/issues/740)) ([20ee9e8](https://github.com/kufu/smarthr-ui/commit/20ee9e83f17baafcf78eb04e6bf4b79f2dc284a3))

## [8.1.0](https://github.com/kufu/smarthr-ui/compare/v8.0.0...v8.1.0) (2020-04-30)


### Features

* add DropZone component ([#719](https://github.com/kufu/smarthr-ui/issues/719)) ([67942a0](https://github.com/kufu/smarthr-ui/commit/67942a08c697c604e4e3e411a1d0e9008cf12c33))


### Bug Fixes

* change Footer base color ([#748](https://github.com/kufu/smarthr-ui/issues/748)) ([ab6ecf6](https://github.com/kufu/smarthr-ui/commit/ab6ecf69ac3f27a61c3d9b15a86a7b2fb6dbfcb7))
* Change header color ([#753](https://github.com/kufu/smarthr-ui/issues/753)) ([43e4e8a](https://github.com/kufu/smarthr-ui/commit/43e4e8a97af7f75206d2a2effbe89168d92a94bf))
* change storybook loader color ([#730](https://github.com/kufu/smarthr-ui/issues/730)) ([f2aed10](https://github.com/kufu/smarthr-ui/commit/f2aed10614e393fa22d9fd4ea76016696c839a4a))
* dropdown scroll area height for ie ([#756](https://github.com/kufu/smarthr-ui/issues/756)) ([4d52204](https://github.com/kufu/smarthr-ui/commit/4d52204af0c1c5893e944ded9966587cc57b71a7))
* fix styles for FlashMessage component ([#726](https://github.com/kufu/smarthr-ui/issues/726)) ([d6b8eae](https://github.com/kufu/smarthr-ui/commit/d6b8eaef9ec2322a266da1593629b329e19a00fb))

## [8.0.0](https://github.com/kufu/smarthr-ui/compare/v7.1.0...v8.0.0) (2020-04-09)


### ⚠ BREAKING CHANGES

* dark property for CheckBox and CheckBoxLable will no longer work
* dark property for RadioButton will no longer work
* The scroll area is no longer automatically allocated.

### Features

* add scroller component for Dropdown ([#720](https://github.com/kufu/smarthr-ui/issues/720)) ([3c9d5b5](https://github.com/kufu/smarthr-ui/commit/3c9d5b5a6409999fec0c6bf966566981bf570dd1))
* update .node-version ([#728](https://github.com/kufu/smarthr-ui/issues/728)) ([e9102d5](https://github.com/kufu/smarthr-ui/commit/e9102d564f11b25f4c64015f1936553932b3fe00))


### Bug Fixes

* fix checkbox style ([#724](https://github.com/kufu/smarthr-ui/issues/724)) ([478d488](https://github.com/kufu/smarthr-ui/commit/478d488cceab265055e591659733474e619130c4))
* radio button style ([#722](https://github.com/kufu/smarthr-ui/issues/722)) ([4a81272](https://github.com/kufu/smarthr-ui/commit/4a812723f095fc0e59abb756c7f42f3708684f5b))
* remove dark property from RadioButton component ([#725](https://github.com/kufu/smarthr-ui/issues/725)) ([f3f70ee](https://github.com/kufu/smarthr-ui/commit/f3f70ee466a504727b5f851a3ed09f156f1208ad))
* tweak arrow size for Ballloon component([#723](https://github.com/kufu/smarthr-ui/issues/723)) ([ae5287f](https://github.com/kufu/smarthr-ui/commit/ae5287f93214908530465dce4c10134e36e9e058))

## [7.1.0](https://github.com/kufu/smarthr-ui/compare/v7.0.0...v7.1.0) (2020-04-03)


### Features

* add scrollable props for DropdownContent ([#710](https://github.com/kufu/smarthr-ui/issues/710)) ([9559404](https://github.com/kufu/smarthr-ui/commit/9559404c6a6308bee9982d077a93b6d236250a95))
* add textarea component ([#683](https://github.com/kufu/smarthr-ui/issues/683)) ([2852d43](https://github.com/kufu/smarthr-ui/commit/2852d43cfe398565919d86c36c46c3328b50329c))


### Bug Fixes

* change AppNaviButton style ([#697](https://github.com/kufu/smarthr-ui/issues/697)) ([25a9729](https://github.com/kufu/smarthr-ui/commit/25a97290a90bec2a191620d42acb80f2e9cd7067))
* change label text color in RadioButtonLabel and CheckBoxLabel ([#698](https://github.com/kufu/smarthr-ui/issues/698)) ([969861f](https://github.com/kufu/smarthr-ui/commit/969861f4ebb9a0c99ce4c6bcbaa6a6f9ad67db2d))
* fix that some styles doesn’t work ([#705](https://github.com/kufu/smarthr-ui/issues/705)) ([f6f75a6](https://github.com/kufu/smarthr-ui/commit/f6f75a6eb78ceee5d9c00ac82264073655ea7ac6))

## [7.0.0](https://github.com/kufu/smarthr-ui/compare/v6.2.0...v7.0.0) (2020-03-18)


### ⚠ BREAKING CHANGES

* change several icon names

### Features

* introduce Footer component ([#686](https://github.com/kufu/smarthr-ui/issues/686)) ([09da7a4](https://github.com/kufu/smarthr-ui/commit/09da7a4b52bf13efcf773b8d0c9457a54188d2cd))


### Bug Fixes

* add align-items property to InformationPanel ([#672](https://github.com/kufu/smarthr-ui/issues/672)) ([1de95b7](https://github.com/kufu/smarthr-ui/commit/1de95b7a28329c70b7de95081858d5ebcb9ea224))
* add optgroup option for select ([#671](https://github.com/kufu/smarthr-ui/issues/671)) ([ebbff1d](https://github.com/kufu/smarthr-ui/commit/ebbff1d1afdb0e985a09a15823ac6a80f7baa5fd))
* avoid creating styled-components' instance dynamically ([#685](https://github.com/kufu/smarthr-ui/issues/685)) ([4adfa2a](https://github.com/kufu/smarthr-ui/commit/4adfa2a55f57a7aed6fb534aef204f0e189efd5f))
* dropdown content position ([#664](https://github.com/kufu/smarthr-ui/issues/664)) ([6bcf49b](https://github.com/kufu/smarthr-ui/commit/6bcf49b971fd11f41987ac208aae6a2372fc8faf))
* fix padding-right in Input ([#665](https://github.com/kufu/smarthr-ui/issues/665)) ([df24caf](https://github.com/kufu/smarthr-ui/commit/df24caf43c39cca3b7d791769b0617d68f7e5d96))
* fix padding-right in Input ([#665](https://github.com/kufu/smarthr-ui/issues/665)) ([c16d5ec](https://github.com/kufu/smarthr-ui/commit/c16d5ec728806c28805908acdb7ea7306d3b4d4c))
* fix typos ([#684](https://github.com/kufu/smarthr-ui/issues/684)) ([1bcd45b](https://github.com/kufu/smarthr-ui/commit/1bcd45ba7212823c20be42d750f726ea93555b9b))

## [6.3.0](https://github.com/kufu/smarthr-ui/compare/v6.2.0...v6.3.0) (2020-11-24)


### Features

* backport Shin Color to v6 (SHRUI-232) ([#1157](https://github.com/kufu/smarthr-ui/issues/1157)) ([f462116](https://github.com/kufu/smarthr-ui/commit/f462116007b047a7ce6c96679cbc8410a55523ea)), closes [#1141](https://github.com/kufu/smarthr-ui/issues/1141)

## [6.2.0](https://github.com/kufu/smarthr-ui/compare/v6.1.1...v6.2.0) (2020-02-13)


### Features

* add icon ([090d48c](https://github.com/kufu/smarthr-ui/commit/090d48ced891c50938a1f727fde682f472efae3c))
* add TBD stories ([#598](https://github.com/kufu/smarthr-ui/issues/598)) ([4c16fdc](https://github.com/kufu/smarthr-ui/commit/4c16fdc97e35c63c83220427c27cd968f965a01c))
* add TEXT_LINK to palette ([#597](https://github.com/kufu/smarthr-ui/issues/597)) ([abb8029](https://github.com/kufu/smarthr-ui/commit/abb8029d6fb21ee4bfa35ab27cfc3345aa77268b))


### Bug Fixes

* dropdown flickers ([#650](https://github.com/kufu/smarthr-ui/issues/650)) ([32ccc98](https://github.com/kufu/smarthr-ui/commit/32ccc985b45876a94a9f1a9e38e97b047175d89b))
* lint for InformationPanel ([f85e8af](https://github.com/kufu/smarthr-ui/commit/f85e8af5870087dc52c5116ff1303b9edf9c53cb))
* long title InformationPanel ([b9d47b5](https://github.com/kufu/smarthr-ui/commit/b9d47b5ee37438f546cd8665464fc6ff8f050e8e))

### [6.1.1](https://github.com/kufu/smarthr-ui/compare/v6.1.0...v6.1.1) (2020-01-21)


### Bug Fixes

* fix description of husky ([b7e8c7c](https://github.com/kufu/smarthr-ui/commit/b7e8c7cebb8749a203593582573b65de7efb18a9))

## [6.1.0](https://github.com/kufu/smarthr-ui/compare/v6.0.0...v6.1.0) (2020-01-20)


### Features

* change children prop type of Heading ([d27424f](https://github.com/kufu/smarthr-ui/commit/d27424f78cb66fa2e4de6566b8fcbf8022a1900f))
* change term prop type of DefinitionListItem ([b654ca0](https://github.com/kufu/smarthr-ui/commit/b654ca007a997d721e649a8f4c12bd798eb5e595))

## [6.0.0](https://github.com/kufu/smarthr-ui/compare/v5.0.0...v6.0.0) (2020-01-17)

### ⚠ BREAKING CHANGES

- change component name of Field to FieldSet([1dd912c](https://github.com/kufu/smarthr-ui/pull/579/commits/1dd912c6f352cbd3949e222c8c88e26d3e8bcd20))
- remove AppBar component([fe07d35](https://github.com/kufu/smarthr-ui/pull/574/commits/fe07d35979d08327d940626c04681a00006bfbaa))
- remove rowspan and colspan props from Cell([282c804](https://github.com/kufu/smarthr-ui/pull/575/commits/282c804eaa17ff405e3a4b8871b2ea93a7bf265a))
- end of support for Node v8([8942a77](https://github.com/kufu/smarthr-ui/pull/573/commits/8942a77bdedc801d492de063eeacd6385ff49cb0))

### Features

- add aria attributes ([d5b6cfd](https://github.com/kufu/smarthr-ui/commit/d5b6cfd6d8dd50143e95013e74f5973fab0020cc))
- add className props ([e8aacf4](https://github.com/kufu/smarthr-ui/commit/e8aacf471c7e42fbe993d4f9a925a15d209fd3ab))
- add defaultExpanded props ([b53f599](https://github.com/kufu/smarthr-ui/commit/b53f59999d9f06a99ca7276e5c8b30b703cd4726))
- add DescriptionList ([88bab82](https://github.com/kufu/smarthr-ui/commit/88bab825970839d3eed46e814c61d4f5fedd641f))
- Add DialogBase component ([#576](https://github.com/kufu/smarthr-ui/issues/576)) ([6f63757](https://github.com/kufu/smarthr-ui/commit/6f6375758fb33d233d3a396100407bfef545da2a))
- add font themes ([56a3fc6](https://github.com/kufu/smarthr-ui/commit/56a3fc6932760ad04acc93d9eb9c38407e44eb92))
- add HeadingTypes type into Heading ([cfd6d3a](https://github.com/kufu/smarthr-ui/commit/cfd6d3a7de37f81f3e06324a2f38c8cd62b7f28a))
- Add onClickOverlay props to to ActionDialog and MessageDialog ([c002fd1](https://github.com/kufu/smarthr-ui/commit/c002fd1049f76106dc137ee08fdc137f6a29c20b))
- add position provider component ([78e8253](https://github.com/kufu/smarthr-ui/commit/78e8253367ea8068045be64acc59ba3e6f3f30af))
- add some examples ([b152b6f](https://github.com/kufu/smarthr-ui/commit/b152b6f277a1e2bbce96596992928cc0b67b7701))
- **icon:** Add a FaClock icon ([73e8156](https://github.com/kufu/smarthr-ui/commit/73e8156a596eb7d028f907d95a79976b0e0b8e17))
- add style ([2c99af2](https://github.com/kufu/smarthr-ui/commit/2c99af245185a46df54f7e3c2db2ff4ef40b0141))
- add style ([7540a13](https://github.com/kufu/smarthr-ui/commit/7540a131aa41b9fa6d14b3cf644c1c3e21e8a713))
- add TextButton component ([9001063](https://github.com/kufu/smarthr-ui/commit/900106352cc494a053832fb433e263f9ec5f8e48))
- add useOffsetHeight hook ([0753bf1](https://github.com/kufu/smarthr-ui/commit/0753bf1783b48b2fea94f1cba04acf70605e7b22))
- Added Header component ([236f58f](https://github.com/kufu/smarthr-ui/commit/236f58fb1e5b64ada6d3ad12210a581ab4b76453))
- change props ([8e51061](https://github.com/kufu/smarthr-ui/commit/8e51061967f63cf5ea66140be825d9f5504af087))
- Create InformationPanel component ([1b08bf7](https://github.com/kufu/smarthr-ui/commit/1b08bf7419426a81c1a97ba559cb3c76c9dc82af))
- divide icon props to iconPosition and DisplayIcon ([1f37eff](https://github.com/kufu/smarthr-ui/commit/1f37effff7df1bb5e15ed94d57c019945450e25e))
- export undo icon ([797adaa](https://github.com/kufu/smarthr-ui/commit/797adaa22754a29fd3de97a4838aaa06da6fd3b2))
- export undo icon ([2cbd5c5](https://github.com/kufu/smarthr-ui/commit/2cbd5c5fd49840d395ff5efd2eeaff7133cd9f79))
- give position provider ([73360ca](https://github.com/kufu/smarthr-ui/commit/73360cafa547daf4cbcdb9968eba6eb2644a7631))
- manage state useing Map object ([e512a42](https://github.com/kufu/smarthr-ui/commit/e512a4213042241381707d2f380716d8d85639e0))
- remove AppBar component ([#574](https://github.com/kufu/smarthr-ui/issues/574)) ([2099a11](https://github.com/kufu/smarthr-ui/commit/2099a11312e388c08ae5fed63217a52e04cc5637))
- set max-height in child components ([086f0f2](https://github.com/kufu/smarthr-ui/commit/086f0f29a4ef4e4954abc94a3e638d28cb42dd1f))
- Update behavior of defaultExpanded ([8190c7c](https://github.com/kufu/smarthr-ui/commit/8190c7ccef1366959c331e93f9805e548fb95a70))
- **Dialog:** close a dialog when Escape key is pressed ([7e86234](https://github.com/kufu/smarthr-ui/commit/7e862345a9977be44f9d67d5dd6e44bd8b43ab1b))
- **icon:** Add arrow right icon ([0d76099](https://github.com/kufu/smarthr-ui/commit/0d76099ea02ef176c60c12885e2b42354ce76171))
- **icon:** Add fa-chevron-_, fa-copy, and fa-trash-_ ([dcfac49](https://github.com/kufu/smarthr-ui/commit/dcfac49c867b92ac53021c0d6db11db51c425713))
- **icon:** Add fa-times-circle ([961a5c9](https://github.com/kufu/smarthr-ui/commit/961a5c99e4e183c2b9ca8a761fccdc4e111e4daa))

### Bug Fixes

- AccordionPanel -> AccordionPanelItem ([c221c65](https://github.com/kufu/smarthr-ui/commit/c221c65faf09a9e026710a64fbfa1eba81e319da))
- add className props ([75d3f20](https://github.com/kufu/smarthr-ui/commit/75d3f20e7772a194545d12b88da39ff3b95e6488))
- add className props for Dropdown component ([#522](https://github.com/kufu/smarthr-ui/issues/522)) ([88c7066](https://github.com/kufu/smarthr-ui/commit/88c70667b4339466b95e28a4ee6b661759e1e3db))
- Add colSpan, rowSpan props to Cell ([9f95526](https://github.com/kufu/smarthr-ui/commit/9f9552622b8f79251b8ddc71f12945a50ec9c72c))
- Add isCrew as props ([8c21b76](https://github.com/kufu/smarthr-ui/commit/8c21b76d65c2cc93d8d9282bc426176ec96687e1))
- Add line-height to DefinitionListItem ([e328728](https://github.com/kufu/smarthr-ui/commit/e3287281754de860ae31aeb51827c1e5f043604c))
- Add ref props ([47fe111](https://github.com/kufu/smarthr-ui/commit/47fe111f0253845c9c2bc404eddaf45d11dde22d))
- add resolutions field ([6e0dc4b](https://github.com/kufu/smarthr-ui/commit/6e0dc4b7f47d3b907b17a63e1f153d7d74f0501d))
- add setTimeout to delay scheduling ([c64ca0b](https://github.com/kufu/smarthr-ui/commit/c64ca0be30d6ceb7e076d9f87b69edbf2d3949ae))
- Adjust style ([88b9767](https://github.com/kufu/smarthr-ui/commit/88b9767786e1905156dfe7c0584a8d52b89dd98b))
- callback onClick ([c792871](https://github.com/kufu/smarthr-ui/commit/c7928713bffffde4247dbddbcd8a656d6299c104))
- change area-expanded value ([02a0ae8](https://github.com/kufu/smarthr-ui/commit/02a0ae818321ce7b3fbd46daf82b16e57f529335))
- change context types ([74edb9a](https://github.com/kufu/smarthr-ui/commit/74edb9a02493b61ca6e709007a550faaedb25c85))
- change fa-reg-plus-square icon to fa-plus-square icon ([d87a545](https://github.com/kufu/smarthr-ui/commit/d87a545785d75149a1f0f9a6d6294f0798f95186))
- Change Field props ([6ebf620](https://github.com/kufu/smarthr-ui/commit/6ebf6209be8a86057c548e5397e95121ee73d5b0))
- change icon ([f704049](https://github.com/kufu/smarthr-ui/commit/f704049d98509574091524c0d98c721092ac6364))
- change name of Field component ([#579](https://github.com/kufu/smarthr-ui/issues/579)) ([f2655c8](https://github.com/kufu/smarthr-ui/commit/f2655c818551895eda5543fab26d822af451535b))
- change padding ([bcda0c6](https://github.com/kufu/smarthr-ui/commit/bcda0c64ec517ad9f7aa1d12ff09d46447de5b34))
- Change RadioButton props ([fe8f014](https://github.com/kufu/smarthr-ui/commit/fe8f014b76334fb5efbf4699cc9358c8e47833c6))
- change rotate direction ([84963e5](https://github.com/kufu/smarthr-ui/commit/84963e58a984f73812652a5f31e8e988fb241b2f))
- Change Select props ([1c667ea](https://github.com/kufu/smarthr-ui/commit/1c667ead5da49dcdbc5cf2bcc26cee75a518f13a))
- Change the animation ([2fbaf84](https://github.com/kufu/smarthr-ui/commit/2fbaf84f3e69d427977ddcb5bfa564f247abcecb))
- change to correct name ([1d0dd75](https://github.com/kufu/smarthr-ui/commit/1d0dd7516b2c234721876c0173e900dfb084b1d5))
- children format ([a44720b](https://github.com/kufu/smarthr-ui/commit/a44720bdc0d752dc45949d1f6f345a70de592db5))
- context initial data ([2a6e39b](https://github.com/kufu/smarthr-ui/commit/2a6e39bc9a333ce0f60b0d0ebe65a5deffae516f))
- Except autoFocus from input ([b3b7065](https://github.com/kufu/smarthr-ui/commit/b3b7065b0f25674b4476475eee9212659a9e3572))
- export components ([d9609db](https://github.com/kufu/smarthr-ui/commit/d9609db46970a16cd8696e577e7e4df428ab3508))
- export import ([369b780](https://github.com/kufu/smarthr-ui/commit/369b780cee10365593114788272dbc2d75e9c8a1))
- export text button ([55b2922](https://github.com/kufu/smarthr-ui/commit/55b292208209668c5c3b5dae1ac7b23ac8010c35))
- fix box-shadow value in Base ([7e7a34e](https://github.com/kufu/smarthr-ui/commit/7e7a34e9e652e09a248f2b58767786a7ae0408b7))
- Fix build error ([1679909](https://github.com/kufu/smarthr-ui/commit/1679909d61121dc200a857d9f9587a141d3aa434))
- Fix dropdown trigger bug ([34aee6b](https://github.com/kufu/smarthr-ui/commit/34aee6b00d458f72040c5a7b15c09d466898dbba))
- fix for reviews ([20fdf3f](https://github.com/kufu/smarthr-ui/commit/20fdf3ff11b761f8a4def324beaeba650b7ae728))
- Fix Header and HeaderButton construction ([364756a](https://github.com/kufu/smarthr-ui/commit/364756aac00ea229ebbaa9a95d860a5b26ef03e3))
- Fix HeaderUserNotification construction ([554b3dd](https://github.com/kufu/smarthr-ui/commit/554b3dd5769dd7bd8ed05ea52b55f6806dbc3f26))
- Fix HeaderUsreDropdown ([2f59124](https://github.com/kufu/smarthr-ui/commit/2f591243ec9e63f9a69f71cd8a674e92eea85046))
- fix line-height for StatusLabel ([58fa24e](https://github.com/kufu/smarthr-ui/commit/58fa24ebc85b9294583745e96704e522413fb00f)), closes [#551](https://github.com/kufu/smarthr-ui/issues/551)
- Fix style ([b2bc511](https://github.com/kufu/smarthr-ui/commit/b2bc5118474df4b4d40b6baed6174a1c9b81c490))
- Fixed a bug that did not animate when using firefox ([c65fa1f](https://github.com/kufu/smarthr-ui/commit/c65fa1f9ac79d12f6249724add9b9a0ecd612e90))
- HeaderCrewDropDown -> HeaderCrewDropdown ([59f2ac5](https://github.com/kufu/smarthr-ui/commit/59f2ac54a9ef1c4a15ce6d93ce064d09c79d2d9d))
- Increase type of Input type props, fix [#483](https://github.com/kufu/smarthr-ui/issues/483) ([e2db0fe](https://github.com/kufu/smarthr-ui/commit/e2db0fe475f81c8e16cfd748b4af79b8803343c9))
- manage state inside component ([855c1ed](https://github.com/kufu/smarthr-ui/commit/855c1ed89843e470c53332295cbf6280d8815a85))
- move helper file to inside libs ([36e30c6](https://github.com/kufu/smarthr-ui/commit/36e30c633856a5acc20e31cd06c0223fce47fd27))
- move icon props to Accordion component ([e6717aa](https://github.com/kufu/smarthr-ui/commit/e6717aa05b11cfa9664cfc862fe0543be67c7219))
- move onClick to trigger component ([8dae970](https://github.com/kufu/smarthr-ui/commit/8dae97011be4cfbca8c12e837ddef1222653c19a))
- not to animate at first rendering ([530542b](https://github.com/kufu/smarthr-ui/commit/530542bd23f3ed46087f6b8888b68e1ffae33d03))
- pass icon props from AccordionPanel ([392668a](https://github.com/kufu/smarthr-ui/commit/392668ad3a75b717b55be39e13d85eb635dbec4f))
- Pass input default props to checkbox ([e576001](https://github.com/kufu/smarthr-ui/commit/e5760012f59fab85e16b572336b41ce1a5d49421))
- Remove console.log ([098a44d](https://github.com/kufu/smarthr-ui/commit/098a44d7c28a5e8ff91a08ca06b293fdd8c66f89))
- Remove unnecessary file ([8e17b82](https://github.com/kufu/smarthr-ui/commit/8e17b8215ebbdc5634d6a1258830fd0f07d1424e))
- remove unnecessary onClick ([ebff6fb](https://github.com/kufu/smarthr-ui/commit/ebff6fba6e56f0b267d84338412cf2631e1f0036))
- rename Accordion to AccordionPanel ([e3925fd](https://github.com/kufu/smarthr-ui/commit/e3925fd8b50f56a7c4c1ddbf296b86854702c396))
- rename function ([f75505e](https://github.com/kufu/smarthr-ui/commit/f75505e7e2c57f1b21169e3ebabc0411a3f69658))
- set disabled style to Input ([bdf16f0](https://github.com/kufu/smarthr-ui/commit/bdf16f0c487e19591f1473c633760ec1d666484f))
- set vertical-align to error message ([701950e](https://github.com/kufu/smarthr-ui/commit/701950e3ddf2f3769a4a22e19101dbad002fbd03))
- state management ([932eb5c](https://github.com/kufu/smarthr-ui/commit/932eb5cb99caa60675f6ba42c1bb7890587678b3))
- style ([5358cf9](https://github.com/kufu/smarthr-ui/commit/5358cf9c93eae60c33314e6d43a19410eac7981b))
- style ([3f9bb39](https://github.com/kufu/smarthr-ui/commit/3f9bb39d08ebcef47f22e151def5ff99a852c685))
- Update avatar style ([93c651e](https://github.com/kufu/smarthr-ui/commit/93c651e147454241222080719465bee44fba6859))
- use forwardRef ([f2ab9a9](https://github.com/kufu/smarthr-ui/commit/f2ab9a9008d8fff07df8df1bb3000ea44f8e7a95))
- **dropdown:** change initial position for dropdown component ([6d73c0a](https://github.com/kufu/smarthr-ui/commit/6d73c0ad882aff6aef5fa6db3c85d152a41d58c8))
- use typescript generics ([1de2b8e](https://github.com/kufu/smarthr-ui/commit/1de2b8e401bc0669b88280b162d7a75665dd3eee))
- **select:** fix selectbox css ([#503](https://github.com/kufu/smarthr-ui/issues/503)) ([934687b](https://github.com/kufu/smarthr-ui/commit/934687b2414ddbbf219e1eb77823d22f6f6f362c))

* Remove deprecated props for Table component (#575) ([74a0220](https://github.com/kufu/smarthr-ui/commit/74a022089e9efe8187bd5023496a9013d003359c)), closes [#575](https://github.com/kufu/smarthr-ui/issues/575)

## [5.10.0](https://github.com/kufu/smarthr-ui/compare/v5.9.0...v5.10.0) (2019-12-20)

### Features

- Create InformationPanel component ([1b08bf7](https://github.com/kufu/smarthr-ui/commit/1b08bf7419426a81c1a97ba559cb3c76c9dc82af))

## [5.9.0](https://github.com/kufu/smarthr-ui/compare/v5.8.0...v5.9.0) (2019-12-12)

### Features

- **Dialog:** close a dialog when Escape key is pressed ([7e86234](https://github.com/kufu/smarthr-ui/commit/7e862345a9977be44f9d67d5dd6e44bd8b43ab1b))

### Bug Fixes

- Fix dropdown trigger bug ([34aee6b](https://github.com/kufu/smarthr-ui/commit/34aee6b00d458f72040c5a7b15c09d466898dbba))
- **dropdown:** change initial position for dropdown component ([6d73c0a](https://github.com/kufu/smarthr-ui/commit/6d73c0ad882aff6aef5fa6db3c85d152a41d58c8))
- add className props for Dropdown component ([#522](https://github.com/kufu/smarthr-ui/issues/522)) ([88c7066](https://github.com/kufu/smarthr-ui/commit/88c70667b4339466b95e28a4ee6b661759e1e3db))
- Add isCrew as props ([8c21b76](https://github.com/kufu/smarthr-ui/commit/8c21b76d65c2cc93d8d9282bc426176ec96687e1))
- change fa-reg-plus-square icon to fa-plus-square icon ([d87a545](https://github.com/kufu/smarthr-ui/commit/d87a545785d75149a1f0f9a6d6294f0798f95186))
- Fix Header and HeaderButton construction ([364756a](https://github.com/kufu/smarthr-ui/commit/364756aac00ea229ebbaa9a95d860a5b26ef03e3))
- Fix HeaderUserNotification construction ([554b3dd](https://github.com/kufu/smarthr-ui/commit/554b3dd5769dd7bd8ed05ea52b55f6806dbc3f26))
- Fix HeaderUsreDropdown ([2f59124](https://github.com/kufu/smarthr-ui/commit/2f591243ec9e63f9a69f71cd8a674e92eea85046))
- Fix style ([b2bc511](https://github.com/kufu/smarthr-ui/commit/b2bc5118474df4b4d40b6baed6174a1c9b81c490))
- HeaderCrewDropDown -> HeaderCrewDropdown ([59f2ac5](https://github.com/kufu/smarthr-ui/commit/59f2ac54a9ef1c4a15ce6d93ce064d09c79d2d9d))
- Remove unnecessary file ([8e17b82](https://github.com/kufu/smarthr-ui/commit/8e17b8215ebbdc5634d6a1258830fd0f07d1424e))
- Update avatar style ([93c651e](https://github.com/kufu/smarthr-ui/commit/93c651e147454241222080719465bee44fba6859))

### [5.8.1](https://github.com/kufu/smarthr-ui/compare/v5.8.0...v5.8.1) (2019-12-10)

### Bug Fixes

- **dropdown:** change initial position for dropdown component ([6d73c0a](https://github.com/kufu/smarthr-ui/commit/6d73c0ad882aff6aef5fa6db3c85d152a41d58c8))
- add className props for Dropdown component ([#522](https://github.com/kufu/smarthr-ui/issues/522)) ([88c7066](https://github.com/kufu/smarthr-ui/commit/88c70667b4339466b95e28a4ee6b661759e1e3db))

## [5.8.0](https://github.com/kufu/smarthr-ui/compare/v5.7.1...v5.8.0) (2019-12-06)

### Features

- **icon:** Add fa-chevron-_, fa-copy, and fa-trash-_ ([dcfac49](https://github.com/kufu/smarthr-ui/commit/dcfac49c867b92ac53021c0d6db11db51c425713))
- Added Header component ([236f58f](https://github.com/kufu/smarthr-ui/commit/236f58fb1e5b64ada6d3ad12210a581ab4b76453))
- Update behavior of defaultExpanded ([8190c7c](https://github.com/kufu/smarthr-ui/commit/8190c7ccef1366959c331e93f9805e548fb95a70))

### Bug Fixes

- Remove console.log ([098a44d](https://github.com/kufu/smarthr-ui/commit/098a44d7c28a5e8ff91a08ca06b293fdd8c66f89))
- **select:** fix selectbox css ([#503](https://github.com/kufu/smarthr-ui/issues/503)) ([934687b](https://github.com/kufu/smarthr-ui/commit/934687b2414ddbbf219e1eb77823d22f6f6f362c))

### [5.7.1](https://github.com/kufu/smarthr-ui/compare/v5.7.0...v5.7.1) (2019-12-04)

### Bug Fixes

- Add colSpan, rowSpan props to Cell ([9f95526](https://github.com/kufu/smarthr-ui/commit/9f9552622b8f79251b8ddc71f12945a50ec9c72c))
- Change the animation ([2fbaf84](https://github.com/kufu/smarthr-ui/commit/2fbaf84f3e69d427977ddcb5bfa564f247abcecb))
- Increase type of Input type props, fix [#483](https://github.com/kufu/smarthr-ui/issues/483) ([e2db0fe](https://github.com/kufu/smarthr-ui/commit/e2db0fe475f81c8e16cfd748b4af79b8803343c9))

## [5.7.0](https://github.com/kufu/smarthr-ui/compare/v5.6.0...v5.7.0) (2019-11-26)

### Features

- **icon:** Add fa-times-circle ([961a5c9](https://github.com/kufu/smarthr-ui/commit/961a5c99e4e183c2b9ca8a761fccdc4e111e4daa))
- Add onClickOverlay props to to ActionDialog and MessageDialog ([c002fd1](https://github.com/kufu/smarthr-ui/commit/c002fd1049f76106dc137ee08fdc137f6a29c20b))

### Bug Fixes

- Add line-height to DefinitionListItem ([e328728](https://github.com/kufu/smarthr-ui/commit/e3287281754de860ae31aeb51827c1e5f043604c))
- Adjust style ([88b9767](https://github.com/kufu/smarthr-ui/commit/88b9767786e1905156dfe7c0584a8d52b89dd98b))
- Fix build error ([1679909](https://github.com/kufu/smarthr-ui/commit/1679909d61121dc200a857d9f9587a141d3aa434))

## [5.6.0](https://github.com/kufu/smarthr-ui/compare/v5.5.0...v5.6.0) (2019-11-20)

### Features

- **icon:** Add arrow right icon ([0d76099](https://github.com/kufu/smarthr-ui/commit/0d76099))

## [5.5.0](https://github.com/kufu/smarthr-ui/compare/v5.2.1...v5.5.0) (2019-11-15)

### Bug Fixes

- AccordionPanel -> AccordionPanelItem ([c221c65](https://github.com/kufu/smarthr-ui/commit/c221c65))
- add className props ([75d3f20](https://github.com/kufu/smarthr-ui/commit/75d3f20))
- callback onClick ([c792871](https://github.com/kufu/smarthr-ui/commit/c792871))
- change area-expanded value ([02a0ae8](https://github.com/kufu/smarthr-ui/commit/02a0ae8))
- change context types ([74edb9a](https://github.com/kufu/smarthr-ui/commit/74edb9a))
- change icon ([f704049](https://github.com/kufu/smarthr-ui/commit/f704049))
- change padding ([bcda0c6](https://github.com/kufu/smarthr-ui/commit/bcda0c6))
- change rotate direction ([84963e5](https://github.com/kufu/smarthr-ui/commit/84963e5))
- change to correct name ([1d0dd75](https://github.com/kufu/smarthr-ui/commit/1d0dd75))
- children format ([a44720b](https://github.com/kufu/smarthr-ui/commit/a44720b))
- context initial data ([2a6e39b](https://github.com/kufu/smarthr-ui/commit/2a6e39b))
- export components ([d9609db](https://github.com/kufu/smarthr-ui/commit/d9609db))
- export import ([369b780](https://github.com/kufu/smarthr-ui/commit/369b780))
- fix for reviews ([20fdf3f](https://github.com/kufu/smarthr-ui/commit/20fdf3f))
- Fixed a bug that did not animate when using firefox ([c65fa1f](https://github.com/kufu/smarthr-ui/commit/c65fa1f))
- manage state inside component ([855c1ed](https://github.com/kufu/smarthr-ui/commit/855c1ed))
- move helper file to inside libs ([36e30c6](https://github.com/kufu/smarthr-ui/commit/36e30c6))
- move icon props to Accordion component ([e6717aa](https://github.com/kufu/smarthr-ui/commit/e6717aa))
- move onClick to trigger component ([8dae970](https://github.com/kufu/smarthr-ui/commit/8dae970))
- not to animate at first rendering ([530542b](https://github.com/kufu/smarthr-ui/commit/530542b))
- pass icon props from AccordionPanel ([392668a](https://github.com/kufu/smarthr-ui/commit/392668a))
- remove unnecessary onClick ([ebff6fb](https://github.com/kufu/smarthr-ui/commit/ebff6fb))
- rename Accordion to AccordionPanel ([e3925fd](https://github.com/kufu/smarthr-ui/commit/e3925fd))
- rename function ([f75505e](https://github.com/kufu/smarthr-ui/commit/f75505e))
- state management ([932eb5c](https://github.com/kufu/smarthr-ui/commit/932eb5c))
- style ([3f9bb39](https://github.com/kufu/smarthr-ui/commit/3f9bb39))
- style ([5358cf9](https://github.com/kufu/smarthr-ui/commit/5358cf9))
- use typescript generics ([1de2b8e](https://github.com/kufu/smarthr-ui/commit/1de2b8e))

### Features

- add aria attributes ([d5b6cfd](https://github.com/kufu/smarthr-ui/commit/d5b6cfd))
- add className props ([e8aacf4](https://github.com/kufu/smarthr-ui/commit/e8aacf4))
- add defaultExpanded props ([b53f599](https://github.com/kufu/smarthr-ui/commit/b53f599))
- add DescriptionList ([88bab82](https://github.com/kufu/smarthr-ui/commit/88bab82))
- add font themes ([56a3fc6](https://github.com/kufu/smarthr-ui/commit/56a3fc6))
- add some examples ([b152b6f](https://github.com/kufu/smarthr-ui/commit/b152b6f))
- add style ([7540a13](https://github.com/kufu/smarthr-ui/commit/7540a13))
- add style ([2c99af2](https://github.com/kufu/smarthr-ui/commit/2c99af2))
- **icon:** Add a FaClock icon ([73e8156](https://github.com/kufu/smarthr-ui/commit/73e8156))
- change props ([8e51061](https://github.com/kufu/smarthr-ui/commit/8e51061))
- divide icon props to iconPosition and DisplayIcon ([1f37eff](https://github.com/kufu/smarthr-ui/commit/1f37eff))
- manage state useing Map object ([e512a42](https://github.com/kufu/smarthr-ui/commit/e512a42))

## [5.4.0](https://github.com/kufu/smarthr-ui/compare/v5.3.0...v5.4.0) (2019-11-13)

### Features

- **icon:** Add a FaClock icon ([73e8156](https://github.com/kufu/smarthr-ui/commit/73e8156))

## [5.3.0](https://github.com/kufu/smarthr-ui/compare/v5.2.1...v5.3.0) (2019-11-12)

### Bug Fixes

- AccordionPanel -> AccordionPanelItem ([c221c65](https://github.com/kufu/smarthr-ui/commit/c221c65))
- add className props ([75d3f20](https://github.com/kufu/smarthr-ui/commit/75d3f20))
- callback onClick ([c792871](https://github.com/kufu/smarthr-ui/commit/c792871))
- change area-expanded value ([02a0ae8](https://github.com/kufu/smarthr-ui/commit/02a0ae8))
- change context types ([74edb9a](https://github.com/kufu/smarthr-ui/commit/74edb9a))
- change icon ([f704049](https://github.com/kufu/smarthr-ui/commit/f704049))
- change padding ([bcda0c6](https://github.com/kufu/smarthr-ui/commit/bcda0c6))
- change rotate direction ([84963e5](https://github.com/kufu/smarthr-ui/commit/84963e5))
- change to correct name ([1d0dd75](https://github.com/kufu/smarthr-ui/commit/1d0dd75))
- children format ([a44720b](https://github.com/kufu/smarthr-ui/commit/a44720b))
- context initial data ([2a6e39b](https://github.com/kufu/smarthr-ui/commit/2a6e39b))
- export components ([d9609db](https://github.com/kufu/smarthr-ui/commit/d9609db))
- export import ([369b780](https://github.com/kufu/smarthr-ui/commit/369b780))
- Fixed a bug that did not animate when using firefox ([c65fa1f](https://github.com/kufu/smarthr-ui/commit/c65fa1f))
- manage state inside component ([855c1ed](https://github.com/kufu/smarthr-ui/commit/855c1ed))
- move helper file to inside libs ([36e30c6](https://github.com/kufu/smarthr-ui/commit/36e30c6))
- move icon props to Accordion component ([e6717aa](https://github.com/kufu/smarthr-ui/commit/e6717aa))
- move onClick to trigger component ([8dae970](https://github.com/kufu/smarthr-ui/commit/8dae970))
- not to animate at first rendering ([530542b](https://github.com/kufu/smarthr-ui/commit/530542b))
- pass icon props from AccordionPanel ([392668a](https://github.com/kufu/smarthr-ui/commit/392668a))
- remove unnecessary onClick ([ebff6fb](https://github.com/kufu/smarthr-ui/commit/ebff6fb))
- rename Accordion to AccordionPanel ([e3925fd](https://github.com/kufu/smarthr-ui/commit/e3925fd))
- rename function ([f75505e](https://github.com/kufu/smarthr-ui/commit/f75505e))
- state management ([932eb5c](https://github.com/kufu/smarthr-ui/commit/932eb5c))
- style ([3f9bb39](https://github.com/kufu/smarthr-ui/commit/3f9bb39))
- style ([5358cf9](https://github.com/kufu/smarthr-ui/commit/5358cf9))
- use typescript generics ([1de2b8e](https://github.com/kufu/smarthr-ui/commit/1de2b8e))

### Features

- add aria attributes ([d5b6cfd](https://github.com/kufu/smarthr-ui/commit/d5b6cfd))
- add className props ([e8aacf4](https://github.com/kufu/smarthr-ui/commit/e8aacf4))
- add defaultExpanded props ([b53f599](https://github.com/kufu/smarthr-ui/commit/b53f599))
- add some examples ([b152b6f](https://github.com/kufu/smarthr-ui/commit/b152b6f))
- add style ([2c99af2](https://github.com/kufu/smarthr-ui/commit/2c99af2))
- add style ([7540a13](https://github.com/kufu/smarthr-ui/commit/7540a13))
- change props ([8e51061](https://github.com/kufu/smarthr-ui/commit/8e51061))
- divide icon props to iconPosition and DisplayIcon ([1f37eff](https://github.com/kufu/smarthr-ui/commit/1f37eff))
- manage state useing Map object ([e512a42](https://github.com/kufu/smarthr-ui/commit/e512a42))

### [5.2.1](https://github.com/kufu/smarthr-ui/compare/v5.2.0...v5.2.1) (2019-11-07)

### Bug Fixes

- Add ref props ([47fe111](https://github.com/kufu/smarthr-ui/commit/47fe111))
- use forwardRef ([f2ab9a9](https://github.com/kufu/smarthr-ui/commit/f2ab9a9))

## [5.2.0](https://github.com/kufu/smarthr-ui/compare/v5.0.0...v5.2.0) (2019-11-06)

### Bug Fixes

- add resolutions field ([6e0dc4b](https://github.com/kufu/smarthr-ui/commit/6e0dc4b))
- Change Field props ([6ebf620](https://github.com/kufu/smarthr-ui/commit/6ebf620))
- Change RadioButton props ([fe8f014](https://github.com/kufu/smarthr-ui/commit/fe8f014))
- Change Select props ([1c667ea](https://github.com/kufu/smarthr-ui/commit/1c667ea))
- Except autoFocus from input ([b3b7065](https://github.com/kufu/smarthr-ui/commit/b3b7065))
- export text button ([55b2922](https://github.com/kufu/smarthr-ui/commit/55b2922))
- Pass input default props to checkbox ([e576001](https://github.com/kufu/smarthr-ui/commit/e576001))

### Features

- add TextButton component ([9001063](https://github.com/kufu/smarthr-ui/commit/9001063))
- export undo icon ([797adaa](https://github.com/kufu/smarthr-ui/commit/797adaa))
- export undo icon ([2cbd5c5](https://github.com/kufu/smarthr-ui/commit/2cbd5c5))

## [5.1.0](https://github.com/kufu/smarthr-ui/compare/v5.0.0...v5.1.0) (2019-11-05)

### Features

- add TextButton component ([9001063](https://github.com/kufu/smarthr-ui/commit/9001063))
- export undo icon ([797adaa](https://github.com/kufu/smarthr-ui/commit/797adaa))
- export undo icon ([2cbd5c5](https://github.com/kufu/smarthr-ui/commit/2cbd5c5))

## [5.0.0](https://github.com/kufu/smarthr-ui/compare/v4.0.1...v5.0.0) (2019-11-01)

### ⚠ BREAKING CHANGES

- Update components
- Fix typo in icon name
- pascal case doesn't support.

- chore: update snapshots
- original icon gets the same props as react-icons

- chore: update snapshot

- chore: export Icon component

- fix: remove 'Base', 'Icon' from IGNORE_DIRS
- remove size of tasting and trenta

### Bug Fixes

- add background-color to Flash component ([56b8079](https://github.com/kufu/smarthr-ui/commit/56b8079))
- Add ThemeProvider to DropdownContent ([8a2a8a2](https://github.com/kufu/smarthr-ui/commit/8a2a8a2))
- **selectbox:** Add aria-label ([8a7a0ab](https://github.com/kufu/smarthr-ui/commit/8a7a0ab))
- apply in DropDown storybook ([8b0b84d](https://github.com/kufu/smarthr-ui/commit/8b0b84d))
- Apply Input in Field Component ([7916091](https://github.com/kufu/smarthr-ui/commit/7916091))
- Change Button interface to conform to the DOM interface ([82003a2](https://github.com/kufu/smarthr-ui/commit/82003a2))
- Change Button interface to conform to the DOM interface ([f6b0a9e](https://github.com/kufu/smarthr-ui/commit/f6b0a9e))
- Change Checkbox interface to conform to the DOM interface ([aa38817](https://github.com/kufu/smarthr-ui/commit/aa38817))
- change for reviews ([e8bf397](https://github.com/kufu/smarthr-ui/commit/e8bf397))
- Change Input interface to conform to the DOM interface ([f01952f](https://github.com/kufu/smarthr-ui/commit/f01952f))
- Change label props to children ([e29f663](https://github.com/kufu/smarthr-ui/commit/e29f663))
- Change prop type for TabItem ([629e552](https://github.com/kufu/smarthr-ui/commit/629e552))
- **selectbox:** Change to use fa-sort ([ca95f47](https://github.com/kufu/smarthr-ui/commit/ca95f47))
- Change Select interface to conform to the DOM interface ([0ff3f35](https://github.com/kufu/smarthr-ui/commit/0ff3f35))
- Change Select interface to conform to the DOM interface ([6567c2d](https://github.com/kufu/smarthr-ui/commit/6567c2d))
- Change Select interface to conform to the DOM interface ([7d05e95](https://github.com/kufu/smarthr-ui/commit/7d05e95))
- Change tag to which className is applied ([4b4f0fd](https://github.com/kufu/smarthr-ui/commit/4b4f0fd))
- Checkbox test ([03adb5d](https://github.com/kufu/smarthr-ui/commit/03adb5d))
- Fix dropdown content position ([e7465c3](https://github.com/kufu/smarthr-ui/commit/e7465c3))
- Fix dropdown content size bug ([5d96292](https://github.com/kufu/smarthr-ui/commit/5d96292))
- Fix font-size ([cd3ed2e](https://github.com/kufu/smarthr-ui/commit/cd3ed2e))
- fix for jslint ([095f709](https://github.com/kufu/smarthr-ui/commit/095f709))
- Fix rendering bug ([0ec70e2](https://github.com/kufu/smarthr-ui/commit/0ec70e2))
- Fix typo ([ff4295c](https://github.com/kufu/smarthr-ui/commit/ff4295c))
- Fix yarn.lock ([ccd75a0](https://github.com/kufu/smarthr-ui/commit/ccd75a0))
- Fix yarn.lock ([936f25b](https://github.com/kufu/smarthr-ui/commit/936f25b))
- Make storybook compatible with React hooks ([1b96936](https://github.com/kufu/smarthr-ui/commit/1b96936))
- memoize DropdownContentRoot ([f470ea9](https://github.com/kufu/smarthr-ui/commit/f470ea9))
- Modify left position logic ([b3af02d](https://github.com/kufu/smarthr-ui/commit/b3af02d))
- Recover lost files ([e6d9c60](https://github.com/kufu/smarthr-ui/commit/e6d9c60))
- Remove export ([03f632f](https://github.com/kufu/smarthr-ui/commit/03f632f))
- Remove the part that was described in double ([66ef42a](https://github.com/kufu/smarthr-ui/commit/66ef42a))
- Remove unnecessary files ([0f70685](https://github.com/kufu/smarthr-ui/commit/0f70685))
- show checkbox focus indicator ([b9f0e85](https://github.com/kufu/smarthr-ui/commit/b9f0e85))
- show Radio focus indicator ([09657a0](https://github.com/kufu/smarthr-ui/commit/09657a0))
- style ([71e37d2](https://github.com/kufu/smarthr-ui/commit/71e37d2))
- support uncontrollable Dropdown ([f55c9bb](https://github.com/kufu/smarthr-ui/commit/f55c9bb))
- Update all storybook's packages ([a0e2eea](https://github.com/kufu/smarthr-ui/commit/a0e2eea))
- Update dropdown position logic ([df50ca9](https://github.com/kufu/smarthr-ui/commit/df50ca9))
- Update ts setting ([843bec0](https://github.com/kufu/smarthr-ui/commit/843bec0))
- Use fa-check instead of check ([bc5ee1c](https://github.com/kufu/smarthr-ui/commit/bc5ee1c))
- Use fa-check-circle instead of check-circle ([d5e560e](https://github.com/kufu/smarthr-ui/commit/d5e560e))
- **select:** Change from text to default ([ae5cae6](https://github.com/kufu/smarthr-ui/commit/ae5cae6))
- **selectbox:** Adjustment when disabled or hover and fix css ([83738ae](https://github.com/kufu/smarthr-ui/commit/83738ae))
- **selectbox:** Remove blackOption and placeholder ([6d7bc5d](https://github.com/kufu/smarthr-ui/commit/6d7bc5d))
- **selectbox:** Remove unnecessary Vendor Prefix ([f26c0ed](https://github.com/kufu/smarthr-ui/commit/f26c0ed))
- Use fa-exclamation-triangle instead of exclamation-triangle ([dd9be98](https://github.com/kufu/smarthr-ui/commit/dd9be98))
- Use fa-times instead of cross ([fafb006](https://github.com/kufu/smarthr-ui/commit/fafb006))
- Use ReactDOM.createElement instead of ReactDOM.render ([957a0b6](https://github.com/kufu/smarthr-ui/commit/957a0b6))

### Features

- add an entry point for ES Modules ([5e9349a](https://github.com/kufu/smarthr-ui/commit/5e9349a))
- Add angle icon ([ea992e4](https://github.com/kufu/smarthr-ui/commit/ea992e4))
- add AppNavi component ([8b4a053](https://github.com/kufu/smarthr-ui/commit/8b4a053))
- add BaseButton component ([7dce43f](https://github.com/kufu/smarthr-ui/commit/7dce43f))
- add BlankImage component ([6f19e51](https://github.com/kufu/smarthr-ui/commit/6f19e51))
- Add className props to CheckboxLabel ([2c7cc94](https://github.com/kufu/smarthr-ui/commit/2c7cc94))
- Add className props to components ([37da6b4](https://github.com/kufu/smarthr-ui/commit/37da6b4))
- add clone icon ([4850691](https://github.com/kufu/smarthr-ui/commit/4850691))
- Add controllable ActionDialog component ([d9a6ddc](https://github.com/kufu/smarthr-ui/commit/d9a6ddc))
- Add controllable Dialog component ([674cfd7](https://github.com/kufu/smarthr-ui/commit/674cfd7))
- Add DangerButton component ([1ced44f](https://github.com/kufu/smarthr-ui/commit/1ced44f))
- Add Dialog basic component ([66ed088](https://github.com/kufu/smarthr-ui/commit/66ed088))
- Add FaCaretUp icon ([e7748e3](https://github.com/kufu/smarthr-ui/commit/e7748e3))
- Add FaExclamationCircle icon ([4720536](https://github.com/kufu/smarthr-ui/commit/4720536))
- Add minus icon ([8dba673](https://github.com/kufu/smarthr-ui/commit/8dba673))
- Add mixed props to Checkbox ([08741a1](https://github.com/kufu/smarthr-ui/commit/08741a1))
- Add NewDropdown component temporary ([c59239e](https://github.com/kufu/smarthr-ui/commit/c59239e))
- Add onClickBackground props to Modal ([e539afe](https://github.com/kufu/smarthr-ui/commit/e539afe))
- add Outline color to PletteProperty ([730e4be](https://github.com/kufu/smarthr-ui/commit/730e4be))
- Add PrimaryButton component ([#297](https://github.com/kufu/smarthr-ui/issues/297)) ([6cd2390](https://github.com/kufu/smarthr-ui/commit/6cd2390))
- add reply icon and paper-plain icon ([a62b623](https://github.com/kufu/smarthr-ui/commit/a62b623))
- add SecondaryButton component ([6909756](https://github.com/kufu/smarthr-ui/commit/6909756))
- add SkeletonButton component ([50500c8](https://github.com/kufu/smarthr-ui/commit/50500c8))
- Add TabBar ([#301](https://github.com/kufu/smarthr-ui/issues/301)) ([4afe1ff](https://github.com/kufu/smarthr-ui/commit/4afe1ff))
- Added Table component ([#269](https://github.com/kufu/smarthr-ui/issues/269)) ([1ec3115](https://github.com/kufu/smarthr-ui/commit/1ec3115))
- Adjust the display position of content ([1183721](https://github.com/kufu/smarthr-ui/commit/1183721))
- **icon:** Add external link icon ([28f240e](https://github.com/kufu/smarthr-ui/commit/28f240e))
- Change Field component props ([49ef9d7](https://github.com/kufu/smarthr-ui/commit/49ef9d7))
- **icon:** Add a FaCloudDownloadAlt icon ([5c4e8bd](https://github.com/kufu/smarthr-ui/commit/5c4e8bd))
- update UI for Pagination component and add `withoutNumbers props` ([93c067d](https://github.com/kufu/smarthr-ui/commit/93c067d))
- **icon:** Add a FaEye icon ([13eb8bf](https://github.com/kufu/smarthr-ui/commit/13eb8bf))
- **select:** Create select component ([f91e471](https://github.com/kufu/smarthr-ui/commit/f91e471))
- Create ActionDialogContent ([c7b6f05](https://github.com/kufu/smarthr-ui/commit/c7b6f05))
- Create controllable MessageDialog component ([ee63d93](https://github.com/kufu/smarthr-ui/commit/ee63d93))
- Create MessageDialog ([82b6e20](https://github.com/kufu/smarthr-ui/commit/82b6e20))
- export default frame ([4e1340d](https://github.com/kufu/smarthr-ui/commit/4e1340d))
- export default hover interaction ([c95707a](https://github.com/kufu/smarthr-ui/commit/c95707a))
- export default size ([1556da1](https://github.com/kufu/smarthr-ui/commit/1556da1))
- export defaultPalette ([34c2f72](https://github.com/kufu/smarthr-ui/commit/34c2f72))
- Update ActionDialogContent props ([cbb77c6](https://github.com/kufu/smarthr-ui/commit/cbb77c6))
- update AppNavi component so it can take a child component ([eabe203](https://github.com/kufu/smarthr-ui/commit/eabe203))

* change some font size ([5596d9f](https://github.com/kufu/smarthr-ui/commit/5596d9f))
* Merge pull request #319 from kufu/features/ttmz ([e5ce046](https://github.com/kufu/smarthr-ui/commit/e5ce046)), closes [#319](https://github.com/kufu/smarthr-ui/issues/319)
* Merge pull request #421 from kufu/fix-typo ([67c0923](https://github.com/kufu/smarthr-ui/commit/67c0923)), closes [#421](https://github.com/kufu/smarthr-ui/issues/421)
* BREAKING CHANGE: Changed color name of theme (#245) ([19a532d](https://github.com/kufu/smarthr-ui/commit/19a532d)), closes [#245](https://github.com/kufu/smarthr-ui/issues/245)
* BREAKING CHANGE: Enabled to use react-icons ([a60ab19](https://github.com/kufu/smarthr-ui/commit/a60ab19))

### [4.0.1](https://github.com/kufu/smarthr-ui/compare/v4.0.0...v4.0.1) (2019-08-06)

### Bug Fixes

- Fix export test ([5e67069](https://github.com/kufu/smarthr-ui/commit/5e67069))

## [4.0.0](https://github.com/kufu/smarthr-ui/compare/v3.9.2...v4.0.0) (2019-08-05)

### Tests

- add a test for missing exports in src/index.ts ([55618db](https://github.com/kufu/smarthr-ui/commit/55618db))

* BREAKING CHANGE: Update palette of theme (#220) ([de50fd8](https://github.com/kufu/smarthr-ui/commit/de50fd8)), closes [#220](https://github.com/kufu/smarthr-ui/issues/220)

### BREAKING CHANGES

- new theme does not support outdated variables

- chore: replace \${palette.White} to #fff

- chore: replace Mono_P10 to Border

- chore: replace Mono_P20 to Border

- chore: replace SmarthrGreen to Main

- chore: theme.palette.White to #fff

- chore: replace Mono_P40 to TextGrey

- chore: replace palette.Red to palette.Danger

- chore: replace Mono_P60 to TextGrey

- chore: replace Orange_M30 to Warning

- chore: replace Yellow to Warning

- chore: replace Red to Danger

- chore: replace Blue to Main

- chore: replace White to #fff

- chore: replace Black to TextBlack

- chore: replace Mono_P30 to TextGrey

- chore: change color

- chore: yarn add polished

- feat: add hoverColor method

- chore: modify hover color for PagenationItem

- chore: modify hover color for Button

- chore: modify focus color for Input

- style: change color code to lower case

- style: update snapshots

### [3.9.2](https://github.com/kufu/smarthr-ui/compare/v3.9.1...v3.9.2) (2019-07-31)

### Bug Fixes

- Skip res-suit when aws credential is not exist ([fc4282d](https://github.com/kufu/smarthr-ui/commit/fc4282d))

### [3.9.1](https://github.com/kufu/smarthr-ui/compare/v3.9.0...v3.9.1) (2019-07-22)

### [3.8.6](https://github.com/kufu/smarthr-ui/compare/v3.8.5...v3.8.6) (2019-07-03)
