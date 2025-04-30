// 定义运算符优先级的函数
// 该函数接收一个运算符作为参数，返回该运算符的优先级
function precedence(operator) {
    // 使用 switch 语句根据不同的运算符返回相应的优先级
    switch (operator) {
        // 加法和减法运算符优先级为 1
        case '+':
        case '-':
            return 1;
        // 乘法和除法运算符优先级为 2
        case '*':
        case '/':
            return 2;
        // 其他情况（如括号）优先级为 0
        default:
            return 0;
    }
}

// 将中缀表达式转换为后缀表达式的函数
// 中缀表达式是我们日常书写的数学表达式形式，而后缀表达式运算符紧跟在操作数之后
function infixToPostfix(expression) {
    // 用于存储最终生成的后缀表达式
    let output = [];
    // 用于存储运算符的栈
    let operatorStack = [];
    // 使用正则表达式将输入的表达式拆分成数字和运算符的数组
    // \d+ 匹配一个或多个数字，[+\-*/()] 匹配运算符和括号
    let tokens = expression.match(/\d+|[+\-*/()]/g);
    console.log(tokens);
    // 遍历拆分后的每个元素
    for (let token of tokens) {
        // 如果当前元素是数字
        if (/^\d+$/.test(token)) {
            // 直接将数字添加到输出数组
            output.push(token);
        } 
        // 如果当前元素是左括号
        else if (token === '(') {
            // 将左括号压入运算符栈
            operatorStack.push(token);
        } 
        // 如果当前元素是右括号
        else if (token === ')') {
            // 当运算符栈不为空且栈顶元素不是左括号时
            while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1]!== '(') {
                // 将栈顶运算符弹出并添加到输出数组
                output.push(operatorStack.pop());
            }
            // 弹出左括号
            operatorStack.pop(); 
        } 
        // 如果当前元素是运算符
        else {
            // 当运算符栈不为空且栈顶运算符的优先级不低于当前运算符时
            while (
                operatorStack.length > 0 &&
                precedence(operatorStack[operatorStack.length - 1]) >= precedence(token)
            ) {
                // 将栈顶运算符弹出并添加到输出数组
                output.push(operatorStack.pop());
            }
            // 将当前运算符压入栈
            operatorStack.push(token);
        }

        console.log('token: ', token,output,operatorStack);
    }

    // console.log(operatorStack); // [ '+', '*', '/', '-', '-', '+' ]
    // console.log(output); // [ '1', '2', '3', '*', '+', '2', '4', '+', '5', '6', '3', '*', '+', '4', '2', '/', '-', '1', '-', '*', '+', '3', '-' ]

    // 当运算符栈中还有剩余元素时
    while (operatorStack.length > 0) {
        // 将栈中剩余的运算符依次弹出并添加到输出数组
        output.push(operatorStack.pop());
    }

    // 返回生成的后缀表达式
    return output;
}

// 计算后缀表达式值的函数
function evaluatePostfix(postfix) {
    // console.log('postfix: ', postfix); // [ '1', '2', '3', '*', '+', '2', '4', '+', '5', '6', '3', '*', '+', '4', '2', '/', '-', '1', '-', '*', '+', '3', '-' ]
    // 用于存储操作数的栈
    let stack = [];
    // 遍历后缀表达式的每个元素
    for (let token of postfix) {
        // 如果当前元素是数字
        if (/^\d+$/.test(token)) {
            // 将数字转换为浮点数并压入栈
            stack.push(parseFloat(token));
        } 
        // 如果当前元素是运算符
        else {
            // 从栈中弹出右操作数
            let right = stack.pop();
            // 从栈中弹出左操作数
            let left = stack.pop();
            // 根据不同的运算符进行相应的运算
            switch (token) {
                case '+':
                    // 加法运算，将结果压入栈
                    stack.push(left + right);
                    break;
                case '-':
                    // 减法运算，将结果压入栈
                    stack.push(left - right);
                    break;
                case '*':
                    // 乘法运算，将结果压入栈
                    stack.push(left * right);
                    break;
                case '/':
                    // 除法运算，将结果压入栈
                    stack.push(left / right);
                    break;
            }
        }
    }
    // 最后栈中剩下的元素就是计算结果，将其弹出返回
    return stack.pop();
}

// 主函数，用于计算表达式的值
function calculateExpression(expression) {
    // 先将中缀表达式转换为后缀表达式
    let postfix = infixToPostfix(expression);
    // 计算后缀表达式的值
    return evaluatePostfix(postfix);
}

// 要计算的表达式
const expression = '1+2*3+2+4-5*(5+6*3+(4/2-1))-3';
// 调用主函数计算表达式的值
const result = calculateExpression(expression);
// 输出表达式及其计算结果
console.log(`表达式 ${expression} 的计算结果是:`, result);
    