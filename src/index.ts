interface IDivisor {
    factor: number
    replacementText: string
}

function formatNumbers(start: number, end: number, divisors: IDivisor[]): string {
    
    let result: string = ''
    
    for (let i = start; i <= end; i++) {
        let element: string = ''
        
        divisors.forEach(divisor => {
            if (i % divisor.factor === 0) element += divisor.replacementText + ' '
        })

        if (!element) element = String(i)
        
        result += element + '\n'
    }
    
    return result
}

const divisors: IDivisor[] = [
    {
        factor: 3,
        replacementText: 'People'
    },
    {
        factor: 5,
        replacementText: 'Power'
    }
]

console.log(formatNumbers(1, 100, divisors))
