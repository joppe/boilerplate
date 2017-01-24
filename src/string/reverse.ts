/**
 * @interface ReverseFunctionInterface
 */
export interface ReverseFunctionInterface {
    /**
     * @param {string} input
     * @returns {string}
     */
    (input:string):string;
}

/**
 * @param {string} input the string that will be reversed
 * @returns {string}
 */
export const reverse:ReverseFunctionInterface = (input:string):string => {
    return input.split('').reverse().join('');
};
