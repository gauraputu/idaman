var assert = require('assert');
var prosesModule = require('../public/static/query');

//test variable
const slotPortDivided = 'IP OLT: 172.27.104.68\nSlot: 2\nPort: 6\nVLAN SPEEDY 3961, VLAN VOIP 500\n59390713_152427901523_INTERNET,59390713_03246170958_VOICE\n\nmintol pelurusan PSB rekna tks'
const slotPortDividedExpectedResult = '279753365-1335537771\t59390713_152427901523_INTERNET\t181575164\tService_Port\n279753365-1335537771\t59390713_03246170958_VOICE\t181575164\tService_Port\n'

describe('single input format slot-port divided', function() {
    it('format slot-port divided', function() {
        let result = prosesModule.proses(slotPortDivided);
        assert.equal(result, slotPortDividedExpectedResult);
      });
});
