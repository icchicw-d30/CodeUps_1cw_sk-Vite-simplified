# CodeUps_1cw_sk-Vite-simplified
- これは静的サイト用Vite環境です
- 開発環境で起動する場合、ファイルは出力されません（ゆえに速度が速い）
- vite.config.jsのportで任意のポート番号を指定できます
    - 必要ない場合は削除してください

# コマンド
- 最初に`npm i`（gulpと同様にnode_modulesをインストール）
- `npm run dev`で開発環境起動
    - ターミナルに表示される`> Local: http://localhost:****/`をクリックしてください（自動で開きません）
- `npm run build`でdistフォルダ作成（ファイル出力）
- ** package.jsonを参照すること **

# 注意点
- 開発フォルダはsrcです
- `<link rel="stylesheet" href="./scss/style.scss" />`のように直接scssを指定してください
- publicフォルダ内のファイルは変換されず、そのままdistフォルダにコピーされます
- `src/public/assets/js/`にjsファイルがない場合はpackage.json > scripts > build の`&& esbuild`以降を削除すること
    - 例：hoge.htmlを作成した場合 => `hoge: resolve(__dirname, './src/hoge.html'),`

# JSについて
- `<script type="module" src="./js/main.js"></script>`は必ず記載してください
- main.jsのtype="module"は外すことはできません
- main.jsは出力後head内に記載されるが問題ありません（type="module"はdeferと同様の処理がされます）
- main.jsの名称を変更した際は、必ずvita.config.jsで設定を変更してください
- publicフォルダ内のJSはtype属性を書かずに通常の方法で記述してください

# 画像圧縮
- viteImageminで実行させてます

# 変数の記述方法
- 基本的にhandlebarsの記述方法で行うこと 例：`{{hoge}}`
- includeとhtml内で定義した変数のみEJSが使用可能 例：`<%= hoge %>` `<%- include('./components/_c-btn.html') %>`
# CodeUps_1cw_sk-Vite-simplified
