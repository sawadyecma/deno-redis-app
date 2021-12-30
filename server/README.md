# Installation

## For Mac

```
brew install deno
```

## hot reload tool

```
deno install -qAf --unstable https://raw.githubusercontent.com/nnmrts/denon/patch-4/denon.ts
```

このコマンドを打った後に、`HomeDir/.deno/bin`にパスを通す

※folkしたリポジトリなので注意

# 環境変数

```
cp .env.sample .env
```


# Run Server

```
make server/dev
```
