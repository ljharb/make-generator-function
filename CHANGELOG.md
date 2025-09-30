# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v2.1.0](https://github.com/ljharb/make-generator-function/compare/v2.0.0...v2.1.0) - 2025-09-30

### Commits

- [actions] reuse common workflows [`81ab0fb`](https://github.com/ljharb/make-generator-function/commit/81ab0fb2b05e9f390b9f9d13e5e0c7d77a08cd01)
- [Tests] migrate tests to Github Actions [`c7c2c59`](https://github.com/ljharb/make-generator-function/commit/c7c2c5997e4e4b9c3d5bfddcd1a837b30b52a4d8)
- [readme] fix examples; remove testling [`9d394f2`](https://github.com/ljharb/make-generator-function/commit/9d394f2173b3fd5ebaa6c3464ff51fb3abf3ccb5)
- [meta] use `npmignore` to autogenerate an npmignore file [`705936b`](https://github.com/ljharb/make-generator-function/commit/705936bed0829e52e3de65943433daf4489f2f7e)
- [Tests] run `nyc` on all tests; use `tape` runner [`a49bd47`](https://github.com/ljharb/make-generator-function/commit/a49bd47226a89b4870d3577a70fc2f334d4b7f94)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `auto-changelog`, `tape` [`8171f61`](https://github.com/ljharb/make-generator-function/commit/8171f614c3dc46fd710fb12d42b6c09bf1bd86d6)
- [readme] add actions and codecov badges [`e24b999`](https://github.com/ljharb/make-generator-function/commit/e24b9995ecfd847ba82f6cb99dcfd14d7913b69a)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `safe-publish-latest`, `tape` [`df5adc8`](https://github.com/ljharb/make-generator-function/commit/df5adc866099ad0d40fc8265b2f4b0afb74f7300)
- [meta] do not publish workflow files [`76aaa64`](https://github.com/ljharb/make-generator-function/commit/76aaa6484c1432eb662869db4451161eb27bf937)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`, `aud`, `auto-changelog` [`d113c23`](https://github.com/ljharb/make-generator-function/commit/d113c2337ded6416588a85cb922a634e165b2517)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `auto-changelog`, `iterate-iterator`, `safe-publish-latest`, `tape` [`137e87e`](https://github.com/ljharb/make-generator-function/commit/137e87e13e2436f8971eae66152c727e9e9c0544)
- [actions] update codecov uploader [`aad77cd`](https://github.com/ljharb/make-generator-function/commit/aad77cdab2ed7e1946170d27af9da54f0bd596bc)
- [actions] add Automatic Rebase and Require Allow Edits workflows [`2795e85`](https://github.com/ljharb/make-generator-function/commit/2795e85b70fd75e67ec7296b8923d3c415817170)
- [Dev Deps] update `@ljharb/eslint-config`, `auto-changelog`, `for-each`, `npmignore`, `tape` [`b9b3fc0`](https://github.com/ljharb/make-generator-function/commit/b9b3fc0a68799b475fa56e9dd4b0cbcb679213f6)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `auto-changelog`, `tape` [`1d4f786`](https://github.com/ljharb/make-generator-function/commit/1d4f786eb40d45b2fc971488b1ebca25e5d8df1a)
- [actions] update rebase action [`08fb424`](https://github.com/ljharb/make-generator-function/commit/08fb4249e906e94aa97529219a7562e9f7f67d1a)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `tape` [`86872bb`](https://github.com/ljharb/make-generator-function/commit/86872bbff47c54e479e7121a309afc5160c331c7)
- [Dev Deps] update `auto-changelog`, `tape`; add `aud` [`c5abe6e`](https://github.com/ljharb/make-generator-function/commit/c5abe6e443e40f690074593c100360e0ce3391fe)
- [actions] update codecov uploader [`ac65104`](https://github.com/ljharb/make-generator-function/commit/ac6510490827ea75cf2fb03edc44f78762472950)
- [actions] update workflows [`b9feec2`](https://github.com/ljharb/make-generator-function/commit/b9feec22317f1ef0fe64275757afd9e876966dff)
- [New] add a generator function declaration [`44c5266`](https://github.com/ljharb/make-generator-function/commit/44c5266aadc07ee44bec16e501f7977c50ec0af0)
- [Tests] replace `aud` with `npm audit` [`999219a`](https://github.com/ljharb/make-generator-function/commit/999219a7bf2a244842847a277421b094e3f0371c)
- [meta] use `prepublishOnly` script for npm 7+ [`964b5e4`](https://github.com/ljharb/make-generator-function/commit/964b5e4c20c49dcc2d37f0a7502f652595145219)
- [meta] better `eclint` command [`531f4b3`](https://github.com/ljharb/make-generator-function/commit/531f4b3e5afaf9176b69e52fbeb9dc8c49c2c1e1)
- [Dev Deps] add missing peer dep [`352ef85`](https://github.com/ljharb/make-generator-function/commit/352ef852f620e13849b78d3c3fd074b9f31967cf)

## [v2.0.0](https://github.com/ljharb/make-generator-function/compare/v1.1.1...v2.0.0) - 2020-01-27

### Commits

- [Breaking] export a function that returns a list of generator functions [`71003b9`](https://github.com/ljharb/make-generator-function/commit/71003b93cd6c58db7e88529b577f6c207386ef60)

## [v1.1.1](https://github.com/ljharb/make-generator-function/compare/v1.1.0...v1.1.1) - 2020-01-27

### Fixed

- [Docs] Add missing license [`#2`](https://github.com/ljharb/make-generator-function/issues/2)

### Commits

- [Tests] use shared travis-ci configs [`73dba5c`](https://github.com/ljharb/make-generator-function/commit/73dba5ca0ecc61b04aedf4143a5bf00d779053a8)
- Update `eslint`, `tape`; use my personal shared `eslint` config [`b604ab4`](https://github.com/ljharb/make-generator-function/commit/b604ab4f282726d6b0b499d5254d8219fd8ada05)
- Add `npm run eslint` [`113d983`](https://github.com/ljharb/make-generator-function/commit/113d983d0be9f50f63639c9ff90d513d4144749a)
- [Tests] remove `jscs` [`4c9100c`](https://github.com/ljharb/make-generator-function/commit/4c9100c5a3891f2d6928ed8978142fc672213100)
- [Tests] up to `node` `v8.4`, `v7.10`, `v6.11`, `v4.8`; newer npm breaks on older node; improve matrix [`865d46f`](https://github.com/ljharb/make-generator-function/commit/865d46f234f8f69dec206f7650dfff1eec038d0e)
- [Tests] up to `node` `v11.7`, `v10.15`, `v9.11`, `v8.15`, `v6.16`, `v4.9` [`c159ff4`](https://github.com/ljharb/make-generator-function/commit/c159ff4db6d10e52718cbadec1133e4823c8a61c)
- [Dev Deps] update `tape`, `jscs`, `eslint`, `@ljharb/eslint-config`, `nsp` [`06336cc`](https://github.com/ljharb/make-generator-function/commit/06336ccd298d959c7e7f7ed9794aa25f9fdebcbb)
- [meta] add `auto-changelog` [`672196a`](https://github.com/ljharb/make-generator-function/commit/672196a9309a7db1830a70921567798fe5e5b371)
- [Tests] up to `node` `v12.10`, `v11.15`, `v10.16`, `v8.16`, `v6.17` [`97c87a3`](https://github.com/ljharb/make-generator-function/commit/97c87a37509f67a90bb01b7e7216fb8b36a2d0f5)
- Update `tape`, `jscs`, `covert` [`55a82c3`](https://github.com/ljharb/make-generator-function/commit/55a82c3050f036bed5269b88f85f3e9db25c0fd2)
- [Tests] up to `node` `v6.2`, `v5.11`, `v4.4` [`e8dd157`](https://github.com/ljharb/make-generator-function/commit/e8dd157e88bd4d003bfa2348497049ef59911d13)
- [Tests] up to `node` `v9.3`, `v8.9`, `v6.12`; use `nvm install-latest-npm`; pin included builds to LTS [`6b9aeda`](https://github.com/ljharb/make-generator-function/commit/6b9aeda6bdeaff473ddd48b1fc8fcb6e132054b4)
- Update `eslint`, `nsp` [`acc5699`](https://github.com/ljharb/make-generator-function/commit/acc5699477ca483b6d0d6f4694b4d5f020d2e709)
- [Tests] up to `node` `v7.0`, `v6.9`, `v4.6`; improve test matrix [`6050544`](https://github.com/ljharb/make-generator-function/commit/6050544a17e69704f36f8853f3bcc21a754c02dc)
- Update `tape`, `jscs`, `eslint`, `@ljharb/eslint-config` [`3a74514`](https://github.com/ljharb/make-generator-function/commit/3a7451468dae605b3987dc9ec3cc6c204f9771dd)
- [actions] add automatic rebasing / merge commit blocking [`2b0632e`](https://github.com/ljharb/make-generator-function/commit/2b0632e7195630256add3a2f5ba747262e553aac)
- Test up to `io.js` `v2.2` [`7be5eaa`](https://github.com/ljharb/make-generator-function/commit/7be5eaa68e6a5a4151ab5eb7b6a1cd6857e28a69)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape` [`89ca6b8`](https://github.com/ljharb/make-generator-function/commit/89ca6b808a2775f07cdda100f92436d38507a7b7)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`; add `safe-publish-latest` [`1085b97`](https://github.com/ljharb/make-generator-function/commit/1085b97777dc3e6a921067e665f420acf8a088df)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `nsp`, `tape` [`31669dd`](https://github.com/ljharb/make-generator-function/commit/31669dd2fdf50221761f5e245a636a60cbc725d7)
- [Dev Deps] update `tape`, `jscs`, `eslint`, `@ljharb/eslint-config`, `nsp` [`3e5632c`](https://github.com/ljharb/make-generator-function/commit/3e5632c60309b688c6f6f0e9f1be3983fa7e6568)
- [Tests] up to `io.js` `v3.3`, `node` `v4.1` [`ae10e71`](https://github.com/ljharb/make-generator-function/commit/ae10e71b9bd83b68e33a3663f70efc3245d45b41)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `covert`, `tape` [`498a056`](https://github.com/ljharb/make-generator-function/commit/498a05681fe60fddce0f533c958865a9d042dfd6)
- [Tests] use `npm audit` instead of `nsp` [`be8e5d2`](https://github.com/ljharb/make-generator-function/commit/be8e5d290d320b017af6d31a102be1d6b6b84e3d)
- Only apps should have lockfiles [`2be2319`](https://github.com/ljharb/make-generator-function/commit/2be2319d558eafb89834e4888615af86fdbd3383)
- [Dev Deps] update `jscs`, `eslint`, `@ljharb/eslint-config`, `nsp` [`54be59e`](https://github.com/ljharb/make-generator-function/commit/54be59eefaafb025109119d92a371a0a2539bcae)
- [Dev Deps] update `jscs` [`5248429`](https://github.com/ljharb/make-generator-function/commit/5248429af6b0be1659ea7793811b1597a380c172)
- [Tests] use `npx aud` instead of `nsp` or `npm audit` with hoops [`3b01ae8`](https://github.com/ljharb/make-generator-function/commit/3b01ae8114988d057cb79ed35a9e835954e821d4)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `nsp` [`94dc41a`](https://github.com/ljharb/make-generator-function/commit/94dc41a31568eae4110a10eef37a5b1de0f37d9b)
- [Dev Deps] update `tape`, `eslint`, `@ljharb/eslint-config` [`5e371bf`](https://github.com/ljharb/make-generator-function/commit/5e371bf9dec98bdf92b47ab5ad17ec0e565e58c0)
- [Tests] use pretest/posttest for linting/security; create `tests-only` script. [`d5794fa`](https://github.com/ljharb/make-generator-function/commit/d5794fa7f1bbf934dc30fcdea2cf6b7cc3eb9ff6)
- [Tests] use `eclint` instead of `editorconfig-tools` [`eed2fad`](https://github.com/ljharb/make-generator-function/commit/eed2fadcebfce81b2624a24b1e76259c560e249a)
- [Dev Deps] update `nsp`, `eslint` [`43665f5`](https://github.com/ljharb/make-generator-function/commit/43665f50b91495587784ee2f60ba79a5ad8a43d1)
- [Tests] up to `node` `v7.2` [`0386a7b`](https://github.com/ljharb/make-generator-function/commit/0386a7b4dd77d201c12329111fad8bc033ca08db)
- [Dev Deps] Update `tape`, `eslint` [`5810537`](https://github.com/ljharb/make-generator-function/commit/5810537b9293440b5c670e6179ff945bea4bc912)
- Test on `iojs-v1.5` and `iojs-v1.6` [`9553cf1`](https://github.com/ljharb/make-generator-function/commit/9553cf102d7473157fd8255c52cfe951eaeb5175)
- Update `editorconfig-tools`, `nsp` [`9c1584a`](https://github.com/ljharb/make-generator-function/commit/9c1584aa8815f74ba6f6fb4f1d2fc574f81731ee)
- [meta] add `funding` field [`293f453`](https://github.com/ljharb/make-generator-function/commit/293f4535e15a72f2dc59ed44a657c606fdaaae74)
- `node` supports generators now. [`ace0d4b`](https://github.com/ljharb/make-generator-function/commit/ace0d4b050aa19e79da6f6b5d285336564a01e92)
- Test up to `io.js `v3.0` [`5b2df35`](https://github.com/ljharb/make-generator-function/commit/5b2df35a95c2bf60bad3b1ff1f44078e9bc0a072)
- Removing unused devDependencies. [`f72daba`](https://github.com/ljharb/make-generator-function/commit/f72daba16c1cbd3a46a8095f7e09f43e39c98cf4)
- [Dev Deps] update `tape` [`c357966`](https://github.com/ljharb/make-generator-function/commit/c35796636dcaeaeaa7038e567723babab6e5a3f5)
- Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG. [`7607415`](https://github.com/ljharb/make-generator-function/commit/76074156dd28d81d958d675200fa1fa6313e4c48)
- Test on `io.js` `v2.4` [`ca61c17`](https://github.com/ljharb/make-generator-function/commit/ca61c174bda520abb4b07381c61dd1b950d62497)
- Test on `io.js` `v2.3` [`5b029ba`](https://github.com/ljharb/make-generator-function/commit/5b029ba8c92ffdd58127963cf03e98864c557968)

## [v1.1.0](https://github.com/ljharb/make-generator-function/compare/v1.0.0...v1.1.0) - 2015-03-03

### Commits

- Add a concise generator method. [`ea86f3d`](https://github.com/ljharb/make-generator-function/commit/ea86f3df4565ce6e0f39745921dcb8b79295ea09)
- All grade A-supported `node`/`iojs` versions now ship with an `npm` that understands `^`. [`62630da`](https://github.com/ljharb/make-generator-function/commit/62630da0cb6a95b74e01337768bf8155e3f9301e)
- Reorganizing tests. [`f77c0cd`](https://github.com/ljharb/make-generator-function/commit/f77c0cd2903a4967f10ee72cc0b845846d82f9c7)
- Update `is`, `tape`, `jscs`, `nsp` [`40c85a2`](https://github.com/ljharb/make-generator-function/commit/40c85a261343ced20aa49c0dce092d252dea9b85)
- Run `travis-ci` tests on `iojs` and `node` v0.12; speed up builds; allow 0.8 failures. [`2f20edc`](https://github.com/ljharb/make-generator-function/commit/2f20edc19142f72c6754bfec1fded309d33142b3)
- Test on latest `io.js` [`0eac7b6`](https://github.com/ljharb/make-generator-function/commit/0eac7b6c268c6c8b26a4d7f317d273ef6ac7c63c)
- Update `tape`, `jscs` [`dab3942`](https://github.com/ljharb/make-generator-function/commit/dab3942b0a873779726536345ca1128b933dddff)
- Update `jscs` [`f9cfafb`](https://github.com/ljharb/make-generator-function/commit/f9cfafb2eec8d2f3bfd5bd08ea7274ae3db99d1e)
- Don't run eccheck as part of tests yet. [`c8fe96d`](https://github.com/ljharb/make-generator-function/commit/c8fe96d983c36bd91e1b6d809aacecea0e314ca5)
- Test on `iojs-v1.2` [`b188157`](https://github.com/ljharb/make-generator-function/commit/b18815735c496e49f3b12c875adf279bae262a7e)

## v1.0.0 - 2014-12-14

### Commits

- Dotfiles. [`e46a5e8`](https://github.com/ljharb/make-generator-function/commit/e46a5e8a3bf643ac2b409a5520a9ea6b2dfede8c)
- package.json [`3198c72`](https://github.com/ljharb/make-generator-function/commit/3198c72c00d01cc37cfa84ba02c770a2075a51bb)
- README. [`745a376`](https://github.com/ljharb/make-generator-function/commit/745a376ea5d159ec2482c9353eef61e0321192ce)
- Tests. [`6298e7c`](https://github.com/ljharb/make-generator-function/commit/6298e7cd6d237ddce2f1d4aedfbdf84f02cc6c17)
- Implementation. [`7d5e297`](https://github.com/ljharb/make-generator-function/commit/7d5e297069acf8f7fdb123a0520a6f0481bf9a08)
- Initial commit. [`cbb4c0c`](https://github.com/ljharb/make-generator-function/commit/cbb4c0cf6ee16d14626ebdf25ee9cce74c0916f6)
