## This is a monorepo template respository

- [x] vite
- [x] vue@next
- [x] typescript
- [x] pnpm
- [x] npm package publish
- [x] commitlint
- [x] eslint powerd by @antfu/eslint-config
- [x] unocss powerd by @antfu
- [x] vitepress
- [x] changelog

## Usage

### Replace `@packages` to your library name

### Add a new package step

- Add package folder

```shell
cp ./packages/lib ./packages/package-name
```

- Modify `package-name` by step

    - `package.josn`, change api-docs script content for `-o` output path

### Publish Run Order

```shell
pnpm build
pnpm api-docs
pnpm bump
pnpm changelog
git add .
git commit -m "chore: changelog"
git push
pnpm publish-all
```