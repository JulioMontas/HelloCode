var app = angular.module('store', []);
    var gems = [
      {
        name: 'Ada',
        year: '1980',
        paradigm: 'Multi-paradigm',
        url: 'ada.html',
        color:'lang-1980'
      },
      {
        name: 'ActionScript',
        year: '1998',
        paradigm: 'Scripting',
        url: 'Actionscript.html',
        color:'lang-1980'
      },
      {
        name: 'Basic',
        year: '1964',
        paradigm: 'General-purpose',
        url: 'basic.html',
        color:'lang-1950'
      },
      {
        name: 'Brainfuck',
        year: '1993',
        paradigm: 'Esoteric',
        url: 'brainfuck.html',
        color:'lang-1980'
      },
      {
        name: 'Boo',
        year: '1993',
        paradigm: 'Object-oriented',
        url: 'boo.html',
        color:'lang-2000'
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
        url: 'C++.html',
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
        name: 'Cinder',
        year: '2010',
        paradigm: 'C++ Library',
        url: 'cinder.html',
        color:'lang-2000'
      },
      {
        name: 'D3.js',
        year: '2011',
        paradigm: 'JavaScript Library',
        url: 'd3js.html',
        color:'lang-2000'
      },
      {
        name: 'Django',
        year: '2005',
        paradigm: 'Python Web Framework',
        url: 'django.html',
        color:'lang-2000'
      },
      {
        name: 'TypeScript',
        year: '2012',
        paradigm: 'Multi-paradigm',
        url: 'typescript.html',
        color:'lang-2000'
      },
      {
        name: 'Etoys',
        year: '1996',
        paradigm: 'Object-oriented',
        url: 'etoys.html',
        color:'lang-1980'
      },
      {
        name: 'Euphoria',
        year: '1993',
        paradigm: 'Interpreted',
        url: 'euphoria.html',
        color:'lang-1980'
      },
      {
        name: 'ECMAScript',
        year: '1997',
        paradigm: 'Object-oriented',
        url: 'etoys.html',
        color:'lang-1980'
      },
      {
        name: 'Fantom',
        year: '2005',
        paradigm: 'Multi-paradigm',
        url: 'fantom.html',
        color:'lang-2000'
      },
      {
        name: 'FALSE',
        year: '1997',
        paradigm: 'Esoteric',
        url: 'FALSE.html',
        color:'lang-1980'
      },
      {
        name: 'Fortran',
        year: '1957',
        paradigm: 'Imperative',
        url: 'fortran.html',
        color:'lang-1950'
      },
      {
        name: 'Forth',
        year: '1970',
        paradigm: 'Multi-paradigm',
        url: 'forth.html',
        color:'lang-1950'
      },
      {
        name: 'Go',
        year: '2009',
        paradigm: 'Multi-paradigm',
        url: 'go.html',
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
        name: 'Haxe',
        year: '2005',
        paradigm: 'Multi-paradigm',
        url: 'haxe.html',
        color:'lang-2000'
      },
      {
        name: 'Halide',
        year: '2012',
        paradigm: 'Domain-specific',
        url: 'haxe.html',
        color:'lang-2000'
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
        url: 'haxe.html',
        color:'lang-1980'
      },
      {
        name: 'Lisp',
        year: '1958',
        paradigm: 'Multi-paradigm',
        url: 'java.html',
        color:'lang-1950'
      },
      {
        name: 'MATLAB',
        year: '1970',
        paradigm: 'Multi-paradigm',
        url: 'haxe.html',
        color:'lang-1950'
      },
      {
        name: 'Modula 3',
        year: '1980',
        paradigm: 'Multi-paradigm',
        url: 'Modula3.html',
        color:'lang-1980'
      },
      {
        name: 'Objective-C',
        year: '1983',
        paradigm: 'Object-oriented',
        url: 'objective_c.html',
        color:'lang-1980'
      },
      {
        name: 'Modula 3',
        year: '2008',
        paradigm: 'Multi-paradigm',
        url: 'objective_j.html',
        color:'lang-2000'
      },
      {
        name: 'Opa',
        year: '2011',
        paradigm: 'Multi-paradigm',
        url: 'opa.html',
        color:'lang-1980'
      },
      {
        name: 'openFrameworks',
        year: '2005',
        paradigm: 'C++ Toolkit',
        url: 'objective_j.html',
        color:'lang-2000'
      },
      {
        name: 'Pascal',
        year: '1970',
        paradigm: 'Imperative',
        url: 'pascal.html',
        color:'lang-1950'
      },
      {
        name: 'Paper.js',
        year: '2011',
        paradigm: 'Vector Graphics Scripting',
        url: 'paperjs.html',
        color:'lang-2000'
      },
      {
        name: 'Python',
        year: '1991',
        paradigm: 'Scripting',
        url: 'python.html',
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
        name: 'Perl',
        year: '1987',
        paradigm: 'Multi-paradigm',
        url: 'perl.html',
        color:'lang-1980'
      },
      {
        name: 'Prolog',
        year: '1972',
        paradigm: 'Logic',
        url: 'prolog.html',
        color:'lang-1950'
      },
      {
        name: 'Processing',
        year: '2001',
        paradigm: 'Object-oriented',
        url: 'processing.html',
        color:'lang-2000'
      },
      {
        name: 'Rust',
        year: '2010',
        paradigm: 'Multi-paradigm',
        url: 'rust.html',
        color:'lang-2000'
      },
      {
        name: 'Ruby',
        year: '1995',
        paradigm: 'Scripting',
        url: 'ruby.html',
        color:'lang-1980'
      },
      {
        name: 'Ruby on Rails',
        year: '2004',
        paradigm: 'Scripting',
        url: 'rubyonrails.html',
        color:'lang-2000'
      },
      {
        name: 'Scala',
        year: '2003',
        paradigm: 'Multi-paradigm',
        url: 'scala.html',
        color:'lang-2000'
      },
      {
        name: 'Smalltalk',
        year: '1969',
        paradigm: 'Object-oriented',
        url: 'rubyonrails.html',
        color:'lang-1950'
      },
      {
        name: 'Spring',
        year: '2002',
        paradigm: 'Java Framework',
        url: 'scala.html',
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
      },
      {
        name: 'Zimbu',
        year: '2009',
        paradigm: 'Experimental',
        url: 'zimbu.html',
        color:'lang-2000'
      }
      ,
      {
        name: '+',
        paradigm: 'New Language Submission',
        url: 'newLangs.html'
      }
    ];
    
    app.controller('StoreController', function () {
      this.product = gems;
    });