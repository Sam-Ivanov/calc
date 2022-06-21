abstract class Expression {
  constructor(readonly type: string) {}

  abstract evaluate(): any;
}

class ConstantExpression extends Expression {
  value: any;

  constructor(value: any) {
    super('constant');

    this.value = value;
  }

  evaluate() {
    return this.value;
  }
}

abstract class BinaryOperatorExpression extends Expression {
  constructor(readonly symbol: string, readonly priority: number) {
    super('operator');
  }

  evaluate() {
    return this.symbol;
  }

  abstract compute(left: Expression, right: Expression): any;
}

class OperationExpression extends Expression {
  leftExpression: Expression;
  rightExpression: Expression;
  operatorExpression: BinaryOperatorExpression;

  constructor(type: string, leftExpression: Expression, rightExpression: Expression, operatorExpression: BinaryOperatorExpression) {
    super(type);

    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
    this.operatorExpression = operatorExpression;
  }

  evaluate() {
    const left = this.leftExpression.evaluate();
    const right = this.rightExpression.evaluate();

    return this.operatorExpression.compute(left, right);
  }
}
