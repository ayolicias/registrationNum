describe('registrations',function(){
  describe('Cape Town Reg number', function(){
    it('return true if it is cape town reg number',function(){
      var num = Registration();
      num.regKey('regs');
    assert.deepEqual(num.regKey('CA 458'),true);
    });
    it('return false if regNumber is not for CapeTown',function(){
      var num = Registration();
      num.regKey('regs');
      assert.deepEqual(num.regKey('Cl 487'),false);
    });
  });
  describe('Error messages', function(){
    it('should not duplicate Registration Number ',function(){
      var num = Registration();
      num.regKey('CA 456');
      num.regKey('CA 456');
      assert.deepEqual(num.store(),['CA 456']);
    });
    it('should return invalid Registration Number ',function(){
      var num = Registration();
      num.regKey('ZS 456');
      assert.deepEqual(num.store(),[]);
    });
  });
  describe('Filter Registration Numbers', function(){
    it('filter CL registration numbers', function(){
      var num2 = Registration();
      num2.regKey('CA 548');
      num2.regKey('CJ 548');
      num2.regKey('CL 948');
      num2.regKey('CAW 48');
      assert.deepEqual(num2.filt('CL'),[ 'CL 948' ]);
    });
    it('filter CJ registration numbers', function(){
      var num2 = Registration();
      num2.regKey('CA 548');
      num2.regKey('CJ 548');
      num2.regKey('CL 948');
      num2.regKey('CAW 48');
      assert.deepEqual(num2.filt('CJ'),[ 'CJ 548' ]);
    });
    it('filter CA registration numbers', function(){
      var num2 = Registration();
      num2.regKey('CA 548');
      num2.regKey('CJ 548');
      num2.regKey('CL 948');
      num2.regKey('CAW 48');
      assert.deepEqual(num2.filt('CA '),[ 'CA 548' ]);
    });
    it('filter CAW registration numbers', function(){
      var num2 = Registration();
      num2.regKey('CA 548');
      num2.regKey('CJ 548');
      num2.regKey('CL 948');
      num2.regKey('CAW 478');
      assert.deepEqual(num2.filt('CAW '),[ 'CAW 478' ]);
    });
    // it('filter All registration numbers', function(){
    //   var num2 = Registration();
    //   num2.regKey('CA 548');
    //   num2.regKey('CJ 548');
    //   num2.regKey('CL 948');
    //   num2.regKey('CAW 478');
    //   assert.deepEqual(num2.filt('CA ', 'CAW ', 'CL ', 'CJ '),['CA 548', 'CAW 478', 'CL 948', 'CJ 548' ]);
    // });
  });
  describe('registration objects', function(){
  it ('returns registration numbers in local storage', function(){
    var local = Registration()
    local.regKey('CA 478');
    local.regKey('CAW 978');
    local.regKey('CL 698');
    local.regKey('CJ 758');
    assert.deepEqual(local.storedMap(),{'CA 478':0,'CAW 978':0,'CL 698':0,'CJ 758':0})
  });
});
});
