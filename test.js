const validator = require('./index');

let schema = {
    type: 'object',
    additionalProperties: false,
    required: true,
    properties: {
        string: { type: 'string', required: true, format: "iso8601", validate(data) { return true; }},
        number: { type: 'number', required: true, less_than: 10, greater_than: 1, equal_to: 9 },
        undefined: { type: 'undefined', required: true },
        null: { type: 'null', required: true },
        boolean: { type: 'boolean', required: true },
        object: {
            type: 'object',
            additionalProperties: true,
            required: false,
            validate(data) {
                return true;
            },

            validateEach(key, value) {
                console.log(key, value);
                return true;
            },
            properties: { number: { type: 'number', required: true }}
        },
        array: { type: 'array', items: { type: 'string', required: false }},
        array_object: {
            required: true,
            type: 'array-object',
            items: {
                type: 'string',
                required: true
            }
        }
    }
}

let data = {
    string: "2019-06-26T20:06:18.658Z",
    number: 9,
    null: null,
    boolean: true,
    object: {
        number: 2
    },
    array: ['hi', 'hello', 'hey'],
    array_object: {
        'sdfnf': 'e',
        'wef': '3',
        'sdffwenf': '2',
        'sdsdfffnf': '1',
    }
};

console.log(validator(schema, data));