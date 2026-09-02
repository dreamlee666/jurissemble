# 产品与数据架构

Jurissemble 不把法律工作简化成文章库或模板库。公开层维护可复用能力，具体客户事项始终留在受控私有环境。

```text
PUBLIC
Repository → Module → Release → Review Claim / Proposal / Advisory
                         ↓ ADD · REFERENCE · FORK · COMPOSE
PRIVATE
Organization → Project → Matter → facts / files / evidence / strategy / logs
```

## 一级对象

- **Repository**：维护边界和协作容器；
- **Legal Module**：可调用能力定义；
- **Release**：不可变版本；
- **Source Reference**：来源、版本、精确位置和权利状态；
- **Review Claim**：绑定具体版本、法域、时点、维度和审查范围；
- **Composition**：锁定多个 Release 的依赖图；
- **Project / Matter**：具体事项的私有运行空间。

## 不变量

1. Public Release 不原地覆盖；
2. Project 默认锁定精确版本；
3. Fork 保留上游谱系但不暗示上游背书；
4. 结构、来源、专业审查、实践反馈和维护状态分别显示；
5. 客户身份、事实、证据、策略和决定不得进入公共层；
6. 自动检查只能证明结构和接口结果，不能替代责任律师判断。
