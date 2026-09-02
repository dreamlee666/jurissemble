# 许可与权利模型

Jurissemble 采用对象级分层许可。公开可见不等于获得无限使用权；每个 Release 必须声明许可证、权利人、排除材料和第三方来源。

## 默认规则

| 对象 | 默认规则 |
|---|---|
| 网站代码和工具 | Apache-2.0 |
| 原创规范、说明、图表和公开模块示例 | CC-BY-4.0 |
| Schema 字段和基础元数据 | CC0-1.0 |
| 官方法律文件 | 记录官方来源，平台不把它重新声明为自己的作品 |
| 第三方数据库、出版物、律所模板 | 没有明确授权时仅可引用元数据和链接 |
| 私有事项内容 | 不公开、不自动许可 |

## Release 最小权利字段

```yaml
license: CC-BY-4.0
rights_holder: contributor-id
rights_scope: [original_method_text, original_diagrams]
excluded_material: [official_legal_text, third_party_database_excerpt]
confidentiality: PUBLIC_GENERAL_METHOD
attribution_url: /modules/owner/name/releases/0.1.0
no_endorsement: true
```

贡献者保留其原创内容的权利。向已有许可证的 Repository 提交并合并贡献时，可受保护的贡献部分继承该 Repository 的许可证。任何人不得通过贡献条款开放其无权许可、负有保密义务或包含个人信息的材料。
