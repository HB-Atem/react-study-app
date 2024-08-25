# React-study-app

## プロジェクト概要

以下の技術要素を利用したReactのWebアプリケーション開発における基礎を学ぶためのプロジェクトです。

## 技術要素

### 主要技術

| 名称       | バージョン | 用途         |
| ---------- | ---------- | ------------ |
| TypeScript | 5.2.2      | フロント言語 |
| React      | 18.2.0     | フロント FW  |
| Vite       | 5.2.0    | ビルドツール  |

### 他ツール

| 名称       | バージョン | 用途         |
| ---------- | ---------- | ------------ |
| SWR        | 2.2.5      | React hook ライブラリ |
| MSW        | 2.3.1      | API モック ライブラリ  |
| Vitest     | 1.6.0      | テストツール  |
| vanilla-extract     | 1.15.2     | CSSライブラリ  |
| biome     | 1.8.0     | Linter/Formatter  |

## リポジトリの構成

```
react-study-app
├── .vscode          //vscodeでの作業に関連する設定(biomeの設定などがあります)
├── coverage         //単体テスト時にテストカバレッジの情報がこちらに出力される
├── public           //faviconなどビルドせずそのままの形式で問題ないファイルを配置
└── src
    ├── (assets)     //コンポーネントに使用する画像やフォントなどビルドが必要なファイルを配置
    ├── components   //共通コンポーネントを管理
    ├── (context)    //共有するステータスを管理
    ├── enum         //定数を管理
    ├── hooks        //複数コンポーネントから使用される hooks を管理
    ├── (libs)       //認証などのライブラリ
    │   └──  hooks   //libsで使用される hooks
    ├── models       //API関連の型定義やモデル管理
    ├── pages        //各画面
    ├── repositories //API関連全般
    │   ├── api      //API接続処理
    │   └── mocks    //APIモック
    ├──  (styles)    //GlobalStyle、共通 CSS などを配置
    ├──  theme       //テーマ（デザイン）に関する変数定義
    └──  types       //型定義
    └──  utils       //便利関数
```

## 環境構築

以下を PC にインストール&準備をする必要があります

1. Volta(Jsのツールマネージャー)
2. Node (npm/yarn)
3. Visual Studio Code

#### 1.Volta install

mac OS/linux環境の場合は以下のコマンドでインストール可能です

```
% curl https://get.volta.sh | bash
```

Windowsの場合は[公式サイト](https://docs.volta.sh/guide/getting-started)の手順に従いインストーラーを利用してください

#### 2.Node install

```
% volta install node@20.10.0
% volta install yarn@4.0.2
```

#### 3.Visual Studio Code install

https://azure.microsoft.com/ja-jp/products/visual-studio-code/

※VSCodeで本プロジェクトを開いたらはじめに拡張機能の検索欄に`@recommended`と入力して推奨された拡張機能をインストールしてください


## 各種コマンド

`package.json`の`scripts`に各種コマンドの記載があります。

#### アプリ起動(バックエンドと接続)

```
% yarn dev
```

#### アプリ起動(mock と接続)

```
% yarn dev:mock
```

※アプリ起動時にエラーとなる場合は必要ライブラリがインストールされていない可能性が高いので`yarn install`のコマンドでライブラリを最新化してから再度アプリ起動してください

#### 文法チェックとフォーマット整理

※基本的にはファイル保存時に行われているはずですが手動の場合は以下コマンドで実行してください

```
% yarn lint / yarn format
```

#### 単体テスト

```
% yarn test
```

※ 実行後にコンソール上、もしくは`coverage/index.html`をブラウザで開くことでテストカバレッジを確認できます