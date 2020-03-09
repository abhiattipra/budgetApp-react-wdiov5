class Utilities {
    /**
     * Utility methods to be used across tests
     */

    getUSCurrencyString(amount){
        return Math.abs(amount).toLocaleString('en-us', {
            style: 'currency',
            currency: 'USD',
          }) 
    };
    formatAmount(amount) {
        return this.getUSCurrencyString(amount);
    }
    convertAmount(amount, negate) {
        var str = '';
        if (negate) {
            str += '-'
        }
        str += this.formatAmount(amount);
        return str;
    }
}

export default new Utilities();