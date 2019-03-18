
enum NumberOperation {
    Equal = 'equal',
    GreaterThan = 'greater than',
    LessThan = 'less than'
}

enum TextOperation {
    Containing = 'containing',
    ExactlyMatching = 'exactly matching',
    BeginsWith = 'begins with',
    EndsWith = 'ends with'
}

enum Type {
    Text = 'Text',
    Number = 'Number',
}

export default class Filter {
    static readonly [Type.Text] = class extends Filter {
        static readonly Operation = TextOperation;

        constructor(operation: TextOperation = TextOperation.Containing, value: string = '') {
            super(operation, value);
        }
    };
    static readonly [Type.Number] = class extends Filter {
        static readonly Operation = NumberOperation;

        constructor(operation: NumberOperation = NumberOperation.Equal, value: number = 0) {
            super(operation, value);
        }
    };

    static enumerateTypes(): string[] {
        return Object.keys(Type);
    }

    enumerateOperations(): [string, string][] {
        return Object.entries(Filter[this.getType()].Operation);
    }

    isInstanceOf(c: new(operation: TextOperation | NumberOperation, value: string | number) => Filter): boolean {
        return (Filter[this.getType()] === c);
    }

    getType(): string {
        return this instanceof Filter[Type.Text] ? Type.Text : Type.Number;
    }

    protected constructor(public operation: TextOperation | NumberOperation, public value: string | number) {}
}


