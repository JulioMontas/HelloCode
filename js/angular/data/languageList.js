var app = angular.module('store', []);
    var gems = [
      {
        name: 'ActionScript',
        year: '1998',
        paradigm: 'Scripting',
        url: 'actionscript.html',
        color:'lang-1980'
      },
      {
        name: 'Ada',
        year: '1980',
        paradigm: 'Multi-paradigm',
        url: 'ada.html',
        color:'lang-1980'
      },
      {
        name: 'ALGO 58',
        year: '1958',
        paradigm: 'Multi-paradigm',
        url: 'algol_58.html',
        color:'lang-1950'
      },
      {
        name: 'ALGO 60',
        year: '1958',
        paradigm: 'Multi-paradigm',
        url: 'algol_60.html',
        color:'lang-1950'
      },
      {
        name: 'ArnoldC',
        year: '2014',
        paradigm: 'General-purpose',
        url: 'arnoldc.html',
        color:'lang-2000'
      },
      {
        name: 'BASIC',
        year: '1964',
        paradigm: 'General-purpose',
        url: 'basic.html',
        color:'lang-1950'
      },
      {
        name: 'Boo',
        year: '1993',
        paradigm: 'Object-oriented',
        url: 'boo.html',
        color:'lang-2000'
      },
      {
        name: 'Brainfuck',
        year: '1993',
        paradigm: 'Esoteric',
        url: 'brainfuck.html',
        color:'lang-1980'
      },
      {
        name: 'C',
        year: '1972',
        paradigm: 'General-purpose',
        url: 'c.html',
        color:'lang-1950'
      },
      {
        name: 'C#',
        year: '2000',
        paradigm: 'Multi-paradigm',
        url: 'c_sharp.html',
        color:'lang-2000'
      },
      {
        name: 'C++',
        year: '1983',
        paradigm: 'Multi-paradigm',
        url: 'c++.html',
        color:'lang-1980'
      },
      {
        name: 'Ceylon',
        year: '2001',
        paradigm: 'Object-oriented',
        url: 'ceylon.html',
        color:'lang-2000'
      },
      {
        name: 'Chapel',
        year: '2009',
        paradigm: 'parallel',
        url: 'chapel.html',
        color:'lang-2000'
      },
      {
        name: 'CLU',
        year: '1974',
        paradigm: 'Multi-paradigm',
        url: 'clu.html',
        color:'lang-1950'
      },
      {
        name: 'Forth',
        year: '1970s',
        paradigm: 'Multi-paradigm',
        url: 'forth.html',
        color:'lang-1950'
      },
      {
        name: 'Go',
        year: '2009',
        paradigm: 'Multi-Paradigm',
        url: 'go.html',
        color:'lang-2000'
      },
      {
        name: 'Halide',
        year: '2012',
        paradigm: 'Domain-specific',
        url: 'halide.html',
        color:'lang-2000'
      },
      {
        name: 'Haskell',
        year: '1990',
        paradigm: 'Functional',
        url: 'haskell.html',
        color:'lang-1980'
      },
      {
        name: 'Java',
        year: '1995',
        paradigm: 'Object-oriented',
        url: 'java.html',
        color:'lang-1980'
      },
      {
        name: 'JavaScript',
        year: '1995',
        paradigm: 'Scripting',
        url: 'javascript.html',
        color:'lang-1980'
      },
      {
        name: 'Lisp',
        year: '1958',
        paradigm: 'Multi-paradigm',
        url: 'list.html',
        color:'lang-1950'
      },
      {
        name: 'MATLAB',
        year: '1970',
        paradigm: 'Multi-paradigm',
        url: 'matlab.html',
        color:'lang-1950'
      },
      {
        name: 'Objective-C',
        year: '1983',
        paradigm: 'Object-oriented',
        url: 'objective_c.html',
        color:'lang-1980'
      },
      {
        name: 'Perl',
        year: '1987',
        paradigm: 'Multi-paradigm',
        url: 'perl.html',
        color:'lang-1980'
      },
      {
        name: 'PHP',
        year: '1995',
        paradigm: 'Scripting',
        url: 'php.html',
        color:'lang-1980'
      },
      {
        name: 'Python',
        year: '1991',
        paradigm: 'Scripting',
        url: 'python.html',
        color:'lang-1980'
      },
      {
        name: 'Ruby',
        year: '1995',
        paradigm: 'Scripting',
        url: 'ruby.html',
        color:'lang-1980'
      },
      {
        name: 'Simula',
        year: '1967',
        paradigm: 'Object-oriented',
        url: 'objective_j.html',
        color:'lang-1950'
      },
      {
        name: 'Smalltalk',
        year: '1969',
        paradigm: 'Object-oriented',
        url: 'rubyonrails.html',
        color:'lang-1950'
      },
      {
        name: 'Swift',
        year: '2014',
        paradigm: 'Multi-paradigm',
        url: 'swift.html',
        color:'lang-2000'
      },
      {
        name: 'TypeScript',
        year: '2012',
        paradigm: 'Multi-paradigm',
        url: 'typeScript.html',
        color:'lang-2000'
      },
      {
        name: 'X10',
        year: '2004',
        paradigm: 'Object-oriented',
        url: 'x10.html',
        color:'lang-2000'
      },
      {
        name: 'Yorick',
        year: '1996',
        paradigm: 'Interpreted',
        url: 'yorick.html',
        color:'lang-1980'
      }
    ];

    app.controller('StoreController', function () {
      this.product = gems;
    });
