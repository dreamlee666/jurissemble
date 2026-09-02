# Legal Module Research Schema V0.1

状态：`Research Prototype / Provisional`。

这个 Schema 用于检验模块的适用边界、输入输出、法域与时间、依赖、来源、权利、审查和状态交接能否被机器读取。它不是行业标准，也不证明法律正确、同行已经审查或适用于具体事项。

## 文件

- `legal-module.schema.json`：JSON Schema Draft 2020-12；
- `examples/source-currentness.module.json`：高模块化样本；
- `examples/case-law-research.module.json`：中模块化样本；
- `examples/litigation-strategy-frame.module.json`：低模块化反例；
- `validate.mjs`：校验全部样本。

```bash
pnpm spec:validate
```

## 兼容性原则

组合两个模块至少检查：语义类型、法域与时间范围、来源要求、权限与敏感等级、责任交接。结构兼容不等于组合后的法律结论正确。

Schema 和基础字段采用 CC0-1.0；示例中的原创说明采用 CC-BY-4.0。第三方来源仅受其各自许可约束。
