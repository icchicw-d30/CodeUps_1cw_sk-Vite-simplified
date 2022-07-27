module.exports = {
  plugins: {
    'postcss-normalize-charset': {}, //CSSファイルの先頭にcharset追加
    autoprefixer: {}, //オートプレフィックス
    'postcss-sort-media-queries': {}, //メディアクエリをソートしてまとめる
    'css-declaration-sorter':{order:'smacss'}, //CSSポロパティの順番をソート
    '@fullhuman/postcss-purgecss': { //CSSファイルから未使用のスタイルを削除
      content: ['./src/**/*.html','./src/js/**/*.js'],
      //除外設定 https://purgecss.com/safelisting.html
      safelist: ['hoge']
    },
  }
}