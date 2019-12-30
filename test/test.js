const birthgem = require('..')();
const assert = require('assert');

describe('birthgem.month()', function() {
    it('should get the birthstone(s) based on the current month', function() {
        assert.deepEqual(birthgem.month(), birthgem.month(new Date().getMonth() + 1));
	});
	
	it('should get the birthstone(s) based on the current month (French override)', function() {
        assert.deepEqual(birthgem.month(undefined, 'fr'), birthgem.month(new Date().getMonth() + 1), 'fr');
    });

    it('should get the birthstone(s) based on the current month (French override)', function() {
        assert.deepEqual(birthgem.month(undefined, 'fr'), birthgem.month(new Date().getMonth() + 1), 'fr');
        assert.deepEqual(birthgem.month(undefined, 'fr'), birthgem.month(new Date().getMonth() + 1), 'fr-FR');
    });

    it('should get the birthstone(s) based on the current month in English (invallid language override)', function() {
        assert.deepEqual(birthgem.month(undefined, 'azerty'), birthgem.month(new Date().getMonth() + 1), 'azerty');
    });
});

describe('birthgem.month(month)', function() {
    it('should get the birthstone(s) based on the month number given', function() {
        assert.deepEqual(birthgem.month(1), ['garnet']);
        assert.deepEqual(birthgem.month(2), ['amethyst']);
        assert.deepEqual(birthgem.month(3), ['aquamarine', 'bloodstone']);
        assert.deepEqual(birthgem.month(4), ['diamond']);
        assert.deepEqual(birthgem.month(5), ['emerald']);
        assert.deepEqual(birthgem.month(6), ['alexandrite', 'moonstone', 'pearl']);
        assert.deepEqual(birthgem.month(7), ['ruby']);
        assert.deepEqual(birthgem.month(8), ['peridot', 'sardonyx', 'spinel']);
        assert.deepEqual(birthgem.month(9), ['sapphire']);
        assert.deepEqual(birthgem.month(10), ['opal', 'tourmaline']);
        assert.deepEqual(birthgem.month(11), ['citrine', 'topaz']);
        assert.deepEqual(birthgem.month(12), ['tanzanite', 'turquoise', 'zircon']);
	});
	
	it('should get the birthstone(s) based on the month number given (French override)', function() {
        assert.deepEqual(birthgem.month(1, 'fr'), ['grenat']);
        assert.deepEqual(birthgem.month(2, 'fr'), ['améthyste']);
        assert.deepEqual(birthgem.month(3, 'fr'), ['aquamarine', 'héliotrope']);
        assert.deepEqual(birthgem.month(4, 'fr'), ['diamant']);
        assert.deepEqual(birthgem.month(5, 'fr'), ['émeraude']);
        assert.deepEqual(birthgem.month(6, 'fr'), ['alexandrite', 'pierre de lune', 'perle']);
        assert.deepEqual(birthgem.month(7, 'fr'), ['rubis']);
        assert.deepEqual(birthgem.month(8, 'fr'), ['péridot', 'sardonyx', 'spinel']);
        assert.deepEqual(birthgem.month(9, 'fr'), ['saphir']);
        assert.deepEqual(birthgem.month(10, 'fr'), ['opale', 'tourmaline']);
        assert.deepEqual(birthgem.month(11, 'fr'), ['citrine', 'topaze']);
        assert.deepEqual(birthgem.month(12, 'fr'), ['tanzanite', 'turquoise', 'zircon']);
    });

    it('should return the error code -1 when the month number is invalid', function() {
        assert.deepEqual(birthgem.month(-1), -1);
        assert.deepEqual(birthgem.month(0), -1);
        assert.deepEqual(birthgem.month(13), -1);
        assert.deepEqual(birthgem.month('january'), -1);
        assert.deepEqual(birthgem.month(1.5), -1);
        assert.deepEqual(birthgem.month(null), -1);
	});
});

describe('birthgem.day()', function() {
    it('should get the birthstone(s) based on the current day', function() {
        assert.deepEqual(birthgem.day(), birthgem.day(new Date().getDay() + 1));
	});
	
	it('should get the birthstone(s) based on the current day (French override)', function() {
        assert.deepEqual(birthgem.day(undefined, 'fr'), birthgem.day(new Date().getDay() + 1, 'fr'));
        assert.deepEqual(birthgem.day(undefined, 'fr'), birthgem.day(new Date().getDay() + 1, 'fr-FR'));
    });

    it('should get the birthstone(s) based on the current day in English (invalid language override)', function() {
        assert.deepEqual(birthgem.day(undefined, 'azerty'), birthgem.day(new Date().getDay() + 1, 'azerty'));
    });
});

describe('birthgem.day(day)', function() {
    it('should get the birthstone(s) based on the day number given', function() {
        assert.deepEqual(birthgem.day(1), ['pearl', 'crystal']);
        assert.deepEqual(birthgem.day(2), ['ruby', 'emerald']);
        assert.deepEqual(birthgem.day(3), ['amethyst', 'lodestone']);
        assert.deepEqual(birthgem.day(4), ['sapphire', 'carnelian']);
        assert.deepEqual(birthgem.day(5), ['emerald', 'cat\'s eye']);
        assert.deepEqual(birthgem.day(6), ['turquoise', 'diamond']);
        assert.deepEqual(birthgem.day(7), ['topaz', 'diamond']);
	});
	
	it('should get the birthstone(s) based on the day number given (French override)', function() {
        assert.deepEqual(birthgem.day(1, 'fr'), ['perle', 'cristal']);
        assert.deepEqual(birthgem.day(2, 'fr'), ['rubis', 'émeraude']);
        assert.deepEqual(birthgem.day(3, 'fr'), ['améthyste', 'magnétite']);
        assert.deepEqual(birthgem.day(4, 'fr'), ['saphir', 'cornaline']);
        assert.deepEqual(birthgem.day(5, 'fr'), ['émeraude', 'œil-de-chat']);
        assert.deepEqual(birthgem.day(6, 'fr'), ['turquoise', 'diamant']);
        assert.deepEqual(birthgem.day(7, 'fr'), ['topaze', 'diamant']);
    });

    it('should return the error code -2 when the day number is invalid', function() {
        assert.deepEqual(birthgem.day(-1), -2);
        assert.deepEqual(birthgem.day(0), -2);
        assert.deepEqual(birthgem.day(8), -2);
        assert.deepEqual(birthgem.day('monday'), -2);
        assert.deepEqual(birthgem.day(1.5), -2);
        assert.deepEqual(birthgem.month(null), -1);
	});
});

describe('birthgem.zodiac(zodiac)', function() {
	it('should get the birthstone(s) based on the zodiac sign symbol', function() {
        assert.deepEqual(birthgem.zodiac('♈'), ['bloodstone']);
        assert.deepEqual(birthgem.zodiac('♉'), ['sapphire']);
        assert.deepEqual(birthgem.zodiac('♊'), ['agate']);
        assert.deepEqual(birthgem.zodiac('♋'), ['emerald']);
        assert.deepEqual(birthgem.zodiac('♌'), ['onyx']);
        assert.deepEqual(birthgem.zodiac('♍'), ['carnelian']);
        assert.deepEqual(birthgem.zodiac('♎'), ['chrysolite']);
        assert.deepEqual(birthgem.zodiac('♏'), ['beryl']);
        assert.deepEqual(birthgem.zodiac('♐'), ['topaz']);
        assert.deepEqual(birthgem.zodiac('♑'), ['ruby']);
        assert.deepEqual(birthgem.zodiac('♒'), ['garnet']);
        assert.deepEqual(birthgem.zodiac('♓'), ['amethyst']);
	});

	it('should get the birthstone(s) based on the zodiac sign symbol (French override)', function() {
        assert.deepEqual(birthgem.zodiac('♈', 'fr'), ['héliotrope']);
        assert.deepEqual(birthgem.zodiac('♉', 'fr'), ['saphir']);
        assert.deepEqual(birthgem.zodiac('♊', 'fr'), ['agate']);
        assert.deepEqual(birthgem.zodiac('♋', 'fr'), ['émeraude']);
        assert.deepEqual(birthgem.zodiac('♌', 'fr'), ['onyx']);
        assert.deepEqual(birthgem.zodiac('♍', 'fr'), ['cornaline']);
        assert.deepEqual(birthgem.zodiac('♎', 'fr'), ['chrysolite']);
        assert.deepEqual(birthgem.zodiac('♏', 'fr'), ['béryl']);
        assert.deepEqual(birthgem.zodiac('♐', 'fr'), ['topaze']);
        assert.deepEqual(birthgem.zodiac('♑', 'fr'), ['rubis']);
        assert.deepEqual(birthgem.zodiac('♒', 'fr'), ['grenat']);
        assert.deepEqual(birthgem.zodiac('♓', 'fr'), ['améthyste']);

        
        assert.deepEqual(birthgem.zodiac('♈', 'fr-FR'), ['héliotrope']);
    });

    it('should get the birthstone(s) based on the zodiac sign name', function() {
        assert.deepEqual(birthgem.zodiac('aries'), ['bloodstone']);
        assert.deepEqual(birthgem.zodiac('taurus'), ['sapphire']);
        assert.deepEqual(birthgem.zodiac('gemini'), ['agate']);
        assert.deepEqual(birthgem.zodiac('cancer'), ['emerald']);
        assert.deepEqual(birthgem.zodiac('leo'), ['onyx']);
        assert.deepEqual(birthgem.zodiac('virgo'), ['carnelian']);
        assert.deepEqual(birthgem.zodiac('libra'), ['chrysolite']);
        assert.deepEqual(birthgem.zodiac('scorpio'), ['beryl']);
        assert.deepEqual(birthgem.zodiac('sagittarus'), ['topaz']);
        assert.deepEqual(birthgem.zodiac('capricorn'), ['ruby']);
        assert.deepEqual(birthgem.zodiac('aquarius'), ['garnet']);
        assert.deepEqual(birthgem.zodiac('pisces'), ['amethyst']);
    });
    
    it('should get the birthstone(s) based on the zodiac sign name (French override)', function() {
        assert.deepEqual(birthgem.zodiac('bélier', 'fr'), ['héliotrope']);
        assert.deepEqual(birthgem.zodiac('taureau', 'fr'), ['saphir']);
        assert.deepEqual(birthgem.zodiac('gémaux', 'fr'), ['agate']);
        assert.deepEqual(birthgem.zodiac('cancer', 'fr'), ['émeraude']);
        assert.deepEqual(birthgem.zodiac('lion', 'fr'), ['onyx']);
        assert.deepEqual(birthgem.zodiac('vierge', 'fr'), ['cornaline']);
        assert.deepEqual(birthgem.zodiac('balance', 'fr'), ['chrysolite']);
        assert.deepEqual(birthgem.zodiac('scorpion', 'fr'), ['béryl']);
        assert.deepEqual(birthgem.zodiac('sagittaire', 'fr'), ['topaze']);
        assert.deepEqual(birthgem.zodiac('capricorne', 'fr'), ['rubis']);
        assert.deepEqual(birthgem.zodiac('verseau', 'fr'), ['grenat']);
        assert.deepEqual(birthgem.zodiac('poissons', 'fr'), ['améthyste']);

        
        assert.deepEqual(birthgem.zodiac('bélier', 'fr-FR'), ['héliotrope']);
    });

    it('should get the birthstone(s) based on the zodiac sign symbol in English (invalid language override)', function() {
        assert.deepEqual(birthgem.zodiac('♈', 'azerty'), ['bloodstone']);
    });
    
    it('should return the error code -3 when the zodiac sign name or symbol is invalid', function() {
        assert.deepEqual(birthgem.zodiac('🐛'), -3);
        assert.deepEqual(birthgem.zodiac('ophiuchus'), -3); // Sorry
        assert.deepEqual(birthgem.zodiac(1), -3);
        assert.deepEqual(birthgem.zodiac(1.5), -3);
        assert.deepEqual(birthgem.zodiac(null), -3);
	});
});