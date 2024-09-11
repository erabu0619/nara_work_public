# コーティング規約(ならちゃんず)
基本的には、[スタイルガイド](https://typescript-jp.gitbook.io/deep-dive/styleguide)及びリーダブルコードを参考とする

## 変数と関数
* 変数と関数名には**camelCase**を使います
```typescript
// 例
var fooVar;
function  barFunc() { }
```

## クラス,インターフェース,Type,Enum
* PascalCaseを使います
```typescript
// 例
class  Foo  { }
interface  Foo  { }
enum Color { }
```
※ enumだけメンバーもPascalCaseを使う

## null vs undefined
* 明示的に使用不可能にするために、どちらも使用しないことを推奨します。

```typescript
// 悪い例
let foo =  { x:  123, y:  undefined  };

// 良い例
let foo:  { x:  number, y?:  number  }  =  { x:  123  };

// 悪い例
return  null;

// 良い例
return  undefined;

// APIまたは従来のAPIの一部である場合はnullを使用する

// undefindeとnullをチェックする際
// 悪い
if  (error !==  null)  // undefinedを除外しない

//　良い
if  (error !=  null)  // undefinedも除外する
```

## 引用符
* typescriptではシングルクォートを使用
* Htmlでは、ダブルクォートを使用

## インデント
* 2つのスペースを使う

## セミコロン
* セミコロンを使用する

## ファイル名
* `camelCase`を使ってファイルに名前を付けます。例えば`accordion.tsx`、`myControl.tsx`、`utils.ts`、`map.ts`などです。

## 定数
* 定数にはなるべくなぜこの定数が必要なのかのコメントを残す

## コメントの種類(コードの欠陥)
|記法|典型的な意味|
|------|--------|
|TODO:|あとで手をつける|
|FIXME:|既知の不具合がある|
|HACK:|あまりきれいじゃない、解決策|
|XXX:|危険大きな問題がある|