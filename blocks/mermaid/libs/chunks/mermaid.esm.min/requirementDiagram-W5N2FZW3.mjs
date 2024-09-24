import{a as Fe}from"./chunk-BOP2KBYH.mjs";import{a as Me}from"./chunk-6XGRHI2A.mjs";import{Ca as qe,L as pe,M as ve,P as $e,Q as Ve,R as Le,S as Oe,T as Ce,X as ne,b as re,fa as se}from"./chunk-DMXVZUOD.mjs";import"./chunk-BKDDFIKN.mjs";import"./chunk-YPUTD6PB.mjs";import"./chunk-6BY5RJGC.mjs";import{a as i}from"./chunk-GTKDMUJJ.mjs";var fe=function(){var e=i(function(L,r,a,l){for(a=a||{},l=L.length;l--;a[L[l]]=r);return a},"o"),t=[1,3],c=[1,4],d=[1,5],u=[1,6],p=[5,6,8,9,11,13,31,32,33,34,35,36,44,62,63],y=[1,18],h=[2,7],o=[1,22],_=[1,23],m=[1,24],k=[1,25],I=[1,26],w=[1,27],$=[1,20],x=[1,28],v=[1,29],F=[62,63],Ee=[5,8,9,11,13,31,32,33,34,35,36,44,51,53,62,63],me=[1,47],Re=[1,48],be=[1,49],ke=[1,50],Ie=[1,51],Se=[1,52],Te=[1,53],C=[53,54],D=[1,64],P=[1,60],Y=[1,61],U=[1,62],B=[1,63],Q=[1,65],j=[1,69],X=[1,70],J=[1,67],Z=[1,68],S=[5,8,9,11,13,31,32,33,34,35,36,44,62,63],ae={trace:i(function(){},"trace"),yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,acc_title:9,acc_title_value:10,acc_descr:11,acc_descr_value:12,acc_descr_multiline_value:13,requirementDef:14,elementDef:15,relationshipDef:16,requirementType:17,requirementName:18,STRUCT_START:19,requirementBody:20,ID:21,COLONSEP:22,id:23,TEXT:24,text:25,RISK:26,riskLevel:27,VERIFYMTHD:28,verifyType:29,STRUCT_STOP:30,REQUIREMENT:31,FUNCTIONAL_REQUIREMENT:32,INTERFACE_REQUIREMENT:33,PERFORMANCE_REQUIREMENT:34,PHYSICAL_REQUIREMENT:35,DESIGN_CONSTRAINT:36,LOW_RISK:37,MED_RISK:38,HIGH_RISK:39,VERIFY_ANALYSIS:40,VERIFY_DEMONSTRATION:41,VERIFY_INSPECTION:42,VERIFY_TEST:43,ELEMENT:44,elementName:45,elementBody:46,TYPE:47,type:48,DOCREF:49,ref:50,END_ARROW_L:51,relationship:52,LINE:53,END_ARROW_R:54,CONTAINS:55,COPIES:56,DERIVES:57,SATISFIES:58,VERIFIES:59,REFINES:60,TRACES:61,unqString:62,qString:63,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",9:"acc_title",10:"acc_title_value",11:"acc_descr",12:"acc_descr_value",13:"acc_descr_multiline_value",19:"STRUCT_START",21:"ID",22:"COLONSEP",24:"TEXT",26:"RISK",28:"VERIFYMTHD",30:"STRUCT_STOP",31:"REQUIREMENT",32:"FUNCTIONAL_REQUIREMENT",33:"INTERFACE_REQUIREMENT",34:"PERFORMANCE_REQUIREMENT",35:"PHYSICAL_REQUIREMENT",36:"DESIGN_CONSTRAINT",37:"LOW_RISK",38:"MED_RISK",39:"HIGH_RISK",40:"VERIFY_ANALYSIS",41:"VERIFY_DEMONSTRATION",42:"VERIFY_INSPECTION",43:"VERIFY_TEST",44:"ELEMENT",47:"TYPE",49:"DOCREF",51:"END_ARROW_L",53:"LINE",54:"END_ARROW_R",55:"CONTAINS",56:"COPIES",57:"DERIVES",58:"SATISFIES",59:"VERIFIES",60:"REFINES",61:"TRACES",62:"unqString",63:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,2],[4,2],[4,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[14,5],[20,5],[20,5],[20,5],[20,5],[20,2],[20,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[27,1],[27,1],[27,1],[29,1],[29,1],[29,1],[29,1],[15,5],[46,5],[46,5],[46,2],[46,1],[16,5],[16,5],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[18,1],[18,1],[23,1],[23,1],[25,1],[25,1],[45,1],[45,1],[48,1],[48,1],[50,1],[50,1]],performAction:i(function(r,a,l,n,f,s,K){var E=s.length-1;switch(f){case 4:this.$=s[E].trim(),n.setAccTitle(this.$);break;case 5:case 6:this.$=s[E].trim(),n.setAccDescription(this.$);break;case 7:this.$=[];break;case 13:n.addRequirement(s[E-3],s[E-4]);break;case 14:n.setNewReqId(s[E-2]);break;case 15:n.setNewReqText(s[E-2]);break;case 16:n.setNewReqRisk(s[E-2]);break;case 17:n.setNewReqVerifyMethod(s[E-2]);break;case 20:this.$=n.RequirementType.REQUIREMENT;break;case 21:this.$=n.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 22:this.$=n.RequirementType.INTERFACE_REQUIREMENT;break;case 23:this.$=n.RequirementType.PERFORMANCE_REQUIREMENT;break;case 24:this.$=n.RequirementType.PHYSICAL_REQUIREMENT;break;case 25:this.$=n.RequirementType.DESIGN_CONSTRAINT;break;case 26:this.$=n.RiskLevel.LOW_RISK;break;case 27:this.$=n.RiskLevel.MED_RISK;break;case 28:this.$=n.RiskLevel.HIGH_RISK;break;case 29:this.$=n.VerifyType.VERIFY_ANALYSIS;break;case 30:this.$=n.VerifyType.VERIFY_DEMONSTRATION;break;case 31:this.$=n.VerifyType.VERIFY_INSPECTION;break;case 32:this.$=n.VerifyType.VERIFY_TEST;break;case 33:n.addElement(s[E-3]);break;case 34:n.setNewElementType(s[E-2]);break;case 35:n.setNewElementDocRef(s[E-2]);break;case 38:n.addRelationship(s[E-2],s[E],s[E-4]);break;case 39:n.addRelationship(s[E-2],s[E-4],s[E]);break;case 40:this.$=n.Relationships.CONTAINS;break;case 41:this.$=n.Relationships.COPIES;break;case 42:this.$=n.Relationships.DERIVES;break;case 43:this.$=n.Relationships.SATISFIES;break;case 44:this.$=n.Relationships.VERIFIES;break;case 45:this.$=n.Relationships.REFINES;break;case 46:this.$=n.Relationships.TRACES;break}},"anonymous"),table:[{3:1,4:2,6:t,9:c,11:d,13:u},{1:[3]},{3:8,4:2,5:[1,7],6:t,9:c,11:d,13:u},{5:[1,9]},{10:[1,10]},{12:[1,11]},e(p,[2,6]),{3:12,4:2,6:t,9:c,11:d,13:u},{1:[2,2]},{4:17,5:y,7:13,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:_,33:m,34:k,35:I,36:w,44:$,62:x,63:v},e(p,[2,4]),e(p,[2,5]),{1:[2,1]},{8:[1,30]},{4:17,5:y,7:31,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:_,33:m,34:k,35:I,36:w,44:$,62:x,63:v},{4:17,5:y,7:32,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:_,33:m,34:k,35:I,36:w,44:$,62:x,63:v},{4:17,5:y,7:33,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:_,33:m,34:k,35:I,36:w,44:$,62:x,63:v},{4:17,5:y,7:34,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:_,33:m,34:k,35:I,36:w,44:$,62:x,63:v},{4:17,5:y,7:35,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:_,33:m,34:k,35:I,36:w,44:$,62:x,63:v},{18:36,62:[1,37],63:[1,38]},{45:39,62:[1,40],63:[1,41]},{51:[1,42],53:[1,43]},e(F,[2,20]),e(F,[2,21]),e(F,[2,22]),e(F,[2,23]),e(F,[2,24]),e(F,[2,25]),e(Ee,[2,49]),e(Ee,[2,50]),{1:[2,3]},{8:[2,8]},{8:[2,9]},{8:[2,10]},{8:[2,11]},{8:[2,12]},{19:[1,44]},{19:[2,47]},{19:[2,48]},{19:[1,45]},{19:[2,53]},{19:[2,54]},{52:46,55:me,56:Re,57:be,58:ke,59:Ie,60:Se,61:Te},{52:54,55:me,56:Re,57:be,58:ke,59:Ie,60:Se,61:Te},{5:[1,55]},{5:[1,56]},{53:[1,57]},e(C,[2,40]),e(C,[2,41]),e(C,[2,42]),e(C,[2,43]),e(C,[2,44]),e(C,[2,45]),e(C,[2,46]),{54:[1,58]},{5:D,20:59,21:P,24:Y,26:U,28:B,30:Q},{5:j,30:X,46:66,47:J,49:Z},{23:71,62:x,63:v},{23:72,62:x,63:v},e(S,[2,13]),{22:[1,73]},{22:[1,74]},{22:[1,75]},{22:[1,76]},{5:D,20:77,21:P,24:Y,26:U,28:B,30:Q},e(S,[2,19]),e(S,[2,33]),{22:[1,78]},{22:[1,79]},{5:j,30:X,46:80,47:J,49:Z},e(S,[2,37]),e(S,[2,38]),e(S,[2,39]),{23:81,62:x,63:v},{25:82,62:[1,83],63:[1,84]},{27:85,37:[1,86],38:[1,87],39:[1,88]},{29:89,40:[1,90],41:[1,91],42:[1,92],43:[1,93]},e(S,[2,18]),{48:94,62:[1,95],63:[1,96]},{50:97,62:[1,98],63:[1,99]},e(S,[2,36]),{5:[1,100]},{5:[1,101]},{5:[2,51]},{5:[2,52]},{5:[1,102]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[1,103]},{5:[2,29]},{5:[2,30]},{5:[2,31]},{5:[2,32]},{5:[1,104]},{5:[2,55]},{5:[2,56]},{5:[1,105]},{5:[2,57]},{5:[2,58]},{5:D,20:106,21:P,24:Y,26:U,28:B,30:Q},{5:D,20:107,21:P,24:Y,26:U,28:B,30:Q},{5:D,20:108,21:P,24:Y,26:U,28:B,30:Q},{5:D,20:109,21:P,24:Y,26:U,28:B,30:Q},{5:j,30:X,46:110,47:J,49:Z},{5:j,30:X,46:111,47:J,49:Z},e(S,[2,14]),e(S,[2,15]),e(S,[2,16]),e(S,[2,17]),e(S,[2,34]),e(S,[2,35])],defaultActions:{8:[2,2],12:[2,1],30:[2,3],31:[2,8],32:[2,9],33:[2,10],34:[2,11],35:[2,12],37:[2,47],38:[2,48],40:[2,53],41:[2,54],83:[2,51],84:[2,52],86:[2,26],87:[2,27],88:[2,28],90:[2,29],91:[2,30],92:[2,31],93:[2,32],95:[2,55],96:[2,56],98:[2,57],99:[2,58]},parseError:i(function(r,a){if(a.recoverable)this.trace(r);else{var l=new Error(r);throw l.hash=a,l}},"parseError"),parse:i(function(r){var a=this,l=[0],n=[],f=[null],s=[],K=this.table,E="",ee=0,Ne=0,xe=0,Ge=2,Ae=1,ze=s.slice.call(arguments,1),R=Object.create(this.lexer),q={yy:{}};for(var oe in this.yy)Object.prototype.hasOwnProperty.call(this.yy,oe)&&(q.yy[oe]=this.yy[oe]);R.setInput(r,q.yy),q.yy.lexer=R,q.yy.parser=this,typeof R.yylloc>"u"&&(R.yylloc={});var ce=R.yylloc;s.push(ce);var je=R.options&&R.options.ranges;typeof q.yy.parseError=="function"?this.parseError=q.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function St(N){l.length=l.length-2*N,f.length=f.length-N,s.length=s.length-N}i(St,"popStack");function Xe(){var N;return N=n.pop()||R.lex()||Ae,typeof N!="number"&&(N instanceof Array&&(n=N,N=n.pop()),N=a.symbols_[N]||N),N}i(Xe,"lex");for(var b,he,M,A,Tt,ue,H={},te,V,we,ie;;){if(M=l[l.length-1],this.defaultActions[M]?A=this.defaultActions[M]:((b===null||typeof b>"u")&&(b=Xe()),A=K[M]&&K[M][b]),typeof A>"u"||!A.length||!A[0]){var de="";ie=[];for(te in K[M])this.terminals_[te]&&te>Ge&&ie.push("'"+this.terminals_[te]+"'");R.showPosition?de="Parse error on line "+(ee+1)+`:
`+R.showPosition()+`
Expecting `+ie.join(", ")+", got '"+(this.terminals_[b]||b)+"'":de="Parse error on line "+(ee+1)+": Unexpected "+(b==Ae?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(de,{text:R.match,token:this.terminals_[b]||b,line:R.yylineno,loc:ce,expected:ie})}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+M+", token: "+b);switch(A[0]){case 1:l.push(b),f.push(R.yytext),s.push(R.yylloc),l.push(A[1]),b=null,he?(b=he,he=null):(Ne=R.yyleng,E=R.yytext,ee=R.yylineno,ce=R.yylloc,xe>0&&xe--);break;case 2:if(V=this.productions_[A[1]][1],H.$=f[f.length-V],H._$={first_line:s[s.length-(V||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(V||1)].first_column,last_column:s[s.length-1].last_column},je&&(H._$.range=[s[s.length-(V||1)].range[0],s[s.length-1].range[1]]),ue=this.performAction.apply(H,[E,Ne,ee,q.yy,A[1],f,s].concat(ze)),typeof ue<"u")return ue;V&&(l=l.slice(0,-1*V*2),f=f.slice(0,-1*V),s=s.slice(0,-1*V)),l.push(this.productions_[A[1]][0]),f.push(H.$),s.push(H._$),we=K[l[l.length-2]][l[l.length-1]],l.push(we);break;case 3:return!0}}return!0},"parse")},Ke=function(){var L={EOF:1,parseError:i(function(a,l){if(this.yy.parser)this.yy.parser.parseError(a,l);else throw new Error(a)},"parseError"),setInput:i(function(r,a){return this.yy=a||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:i(function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var a=r.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:i(function(r){var a=r.length,l=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var f=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===n.length?this.yylloc.first_column:0)+n[n.length-l.length].length-l[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[f[0],f[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:i(function(){return this._more=!0,this},"more"),reject:i(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:i(function(r){this.unput(this.match.slice(r))},"less"),pastInput:i(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:i(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:i(function(){var r=this.pastInput(),a=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:i(function(r,a){var l,n,f;if(this.options.backtrack_lexer&&(f={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(f.yylloc.range=this.yylloc.range.slice(0))),n=r[0].match(/(?:\r\n?|\n).*/g),n&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],l=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var s in f)this[s]=f[s];return!1}return!1},"test_match"),next:i(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,a,l,n;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),s=0;s<f.length;s++)if(l=this._input.match(this.rules[f[s]]),l&&(!a||l[0].length>a[0].length)){if(a=l,n=s,this.options.backtrack_lexer){if(r=this.test_match(l,f[s]),r!==!1)return r;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(r=this.test_match(a,f[n]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:i(function(){var a=this.next();return a||this.lex()},"lex"),begin:i(function(a){this.conditionStack.push(a)},"begin"),popState:i(function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:i(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:i(function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},"topState"),pushState:i(function(a){this.begin(a)},"pushState"),stateStackSize:i(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:i(function(a,l,n,f){var s=f;switch(n){case 0:return"title";case 1:return this.begin("acc_title"),9;break;case 2:return this.popState(),"acc_title_value";break;case 3:return this.begin("acc_descr"),11;break;case 4:return this.popState(),"acc_descr_value";break;case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:return 5;case 9:break;case 10:break;case 11:break;case 12:return 8;case 13:return 6;case 14:return 19;case 15:return 30;case 16:return 22;case 17:return 21;case 18:return 24;case 19:return 26;case 20:return 28;case 21:return 31;case 22:return 32;case 23:return 33;case 24:return 34;case 25:return 35;case 26:return 36;case 27:return 37;case 28:return 38;case 29:return 39;case 30:return 40;case 31:return 41;case 32:return 42;case 33:return 43;case 34:return 44;case 35:return 55;case 36:return 56;case 37:return 57;case 38:return 58;case 39:return 59;case 40:return 60;case 41:return 61;case 42:return 47;case 43:return 49;case 44:return 51;case 45:return 54;case 46:return 53;case 47:this.begin("string");break;case 48:this.popState();break;case 49:return"qString";case 50:return l.yytext=l.yytext.trim(),62;break}},"anonymous"),rules:[/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[48,49],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,50],inclusive:!0}}};return L}();ae.lexer=Ke;function le(){this.yy={}}return i(le,"Parser"),le.prototype=ae,ae.Parser=le,new le}();fe.parser=fe;var De=fe;var ye=[],T={},G=new Map,O={},z=new Map,Je={REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},Ze={LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},et={VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},tt={CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},it=i((e,t)=>(G.has(e)||G.set(e,{name:e,type:t,id:T.id,text:T.text,risk:T.risk,verifyMethod:T.verifyMethod}),T={},G.get(e)),"addRequirement"),rt=i(()=>G,"getRequirements"),nt=i(e=>{T!==void 0&&(T.id=e)},"setNewReqId"),st=i(e=>{T!==void 0&&(T.text=e)},"setNewReqText"),at=i(e=>{T!==void 0&&(T.risk=e)},"setNewReqRisk"),lt=i(e=>{T!==void 0&&(T.verifyMethod=e)},"setNewReqVerifyMethod"),ot=i(e=>(z.has(e)||(z.set(e,{name:e,type:O.type,docRef:O.docRef}),re.info("Added new requirement: ",e)),O={},z.get(e)),"addElement"),ct=i(()=>z,"getElements"),ht=i(e=>{O!==void 0&&(O.type=e)},"setNewElementType"),ut=i(e=>{O!==void 0&&(O.docRef=e)},"setNewElementDocRef"),dt=i((e,t,c)=>{ye.push({type:e,src:t,dst:c})},"addRelationship"),pt=i(()=>ye,"getRelationships"),ft=i(()=>{ye=[],T={},G=new Map,O={},z=new Map,$e()},"clear"),Pe={RequirementType:Je,RiskLevel:Ze,VerifyType:et,Relationships:tt,getConfig:i(()=>ne().req,"getConfig"),addRequirement:it,getRequirements:rt,setNewReqId:nt,setNewReqText:st,setNewReqRisk:at,setNewReqVerifyMethod:lt,setAccTitle:Ve,getAccTitle:Le,setAccDescription:Oe,getAccDescription:Ce,addElement:ot,getElements:ct,setNewElementType:ht,setNewElementDocRef:ut,addRelationship:dt,getRelationships:pt,clear:ft};var yt=i(e=>`

  marker {
    fill: ${e.relationColor};
    stroke: ${e.relationColor};
  }

  marker.cross {
    stroke: ${e.lineColor};
  }

  svg {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
  }

  .reqBox {
    fill: ${e.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${e.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${e.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${e.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${e.relationLabelColor};
  }

`,"getStyles"),Ye=yt;var ge={CONTAINS:"contains",ARROW:"arrow"},gt=i((e,t)=>{let c=e.append("defs").append("marker").attr("id",ge.CONTAINS+"_line_ending").attr("refX",0).attr("refY",t.line_height/2).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("g");c.append("circle").attr("cx",t.line_height/2).attr("cy",t.line_height/2).attr("r",t.line_height/2).attr("fill","none"),c.append("line").attr("x1",0).attr("x2",t.line_height).attr("y1",t.line_height/2).attr("y2",t.line_height/2).attr("stroke-width",1),c.append("line").attr("y1",0).attr("y2",t.line_height).attr("x1",t.line_height/2).attr("x2",t.line_height/2).attr("stroke-width",1),e.append("defs").append("marker").attr("id",ge.ARROW+"_line_ending").attr("refX",t.line_height).attr("refY",.5*t.line_height).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("path").attr("d",`M0,0
      L${t.line_height},${t.line_height/2}
      M${t.line_height},${t.line_height/2}
      L0,${t.line_height}`).attr("stroke-width",1)},"insertLineEndings"),_e={ReqMarkers:ge,insertLineEndings:gt};var g={},Ue=0,Be=i((e,t)=>e.insert("rect","#"+t).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",g.rect_min_width+"px").attr("height",g.rect_min_height+"px"),"newRectNode"),Qe=i((e,t,c)=>{let d=g.rect_min_width/2,u=e.append("text").attr("class","req reqLabel reqTitle").attr("id",t).attr("x",d).attr("y",g.rect_padding).attr("dominant-baseline","hanging"),p=0;c.forEach(_=>{p==0?u.append("tspan").attr("text-anchor","middle").attr("x",g.rect_min_width/2).attr("dy",0).text(_):u.append("tspan").attr("text-anchor","middle").attr("x",g.rect_min_width/2).attr("dy",g.line_height*.75).text(_),p++});let y=1.5*g.rect_padding,h=p*g.line_height*.75,o=y+h;return e.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",g.rect_min_width).attr("y1",o).attr("y2",o),{titleNode:u,y:o}},"newTitleNode"),He=i((e,t,c,d)=>{let u=e.append("text").attr("class","req reqLabel").attr("id",t).attr("x",g.rect_padding).attr("y",d).attr("dominant-baseline","hanging"),p=0,y=30,h=[];return c.forEach(o=>{let _=o.length;for(;_>y&&p<3;){let m=o.substring(0,y);o=o.substring(y,o.length),_=o.length,h[h.length]=m,p++}if(p==3){let m=h[h.length-1];h[h.length-1]=m.substring(0,m.length-4)+"..."}else h[h.length]=o;p=0}),h.forEach(o=>{u.append("tspan").attr("x",g.rect_padding).attr("dy",g.line_height).text(o)}),u},"newBodyNode"),_t=i((e,t,c,d)=>{let u=t.node().getTotalLength(),p=t.node().getPointAtLength(u*.5),y="rel"+Ue;Ue++;let o=e.append("text").attr("class","req relationshipLabel").attr("id",y).attr("x",p.x).attr("y",p.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(d).node().getBBox();e.insert("rect","#"+y).attr("class","req reqLabelBox").attr("x",p.x-o.width/2).attr("y",p.y-o.height/2).attr("width",o.width).attr("height",o.height).attr("fill","white").attr("fill-opacity","85%")},"addEdgeLabel"),Et=i(function(e,t,c,d,u){let p=c.edge(W(t.src),W(t.dst)),y=qe().x(function(o){return o.x}).y(function(o){return o.y}),h=e.insert("path","#"+d).attr("class","er relationshipLine").attr("d",y(p.points)).attr("fill","none");t.type==u.db.Relationships.CONTAINS?h.attr("marker-start","url("+pe.getUrl(g.arrowMarkerAbsolute)+"#"+t.type+"_line_ending)"):(h.attr("stroke-dasharray","10,7"),h.attr("marker-end","url("+pe.getUrl(g.arrowMarkerAbsolute)+"#"+_e.ReqMarkers.ARROW+"_line_ending)")),_t(e,h,g,`<<${t.type}>>`)},"drawRelationshipFromLayout"),mt=i((e,t,c)=>{e.forEach((d,u)=>{u=W(u),re.info("Added new requirement: ",u);let p=c.append("g").attr("id",u),y="req-"+u,h=Be(p,y),o=[],_=Qe(p,u+"_title",[`<<${d.type}>>`,`${d.name}`]);o.push(_.titleNode);let m=He(p,u+"_body",[`Id: ${d.id}`,`Text: ${d.text}`,`Risk: ${d.risk}`,`Verification: ${d.verifyMethod}`],_.y);o.push(m);let k=h.node().getBBox();t.setNode(u,{width:k.width,height:k.height,shape:"rect",id:u})})},"drawReqs"),Rt=i((e,t,c)=>{e.forEach((d,u)=>{let p=W(u),y=c.append("g").attr("id",p),h="element-"+p,o=Be(y,h),_=[],m=Qe(y,h+"_title",["<<Element>>",`${u}`]);_.push(m.titleNode);let k=He(y,h+"_body",[`Type: ${d.type||"Not Specified"}`,`Doc Ref: ${d.docRef||"None"}`],m.y);_.push(k);let I=o.node().getBBox();t.setNode(p,{width:I.width,height:I.height,shape:"rect",id:p})})},"drawElements"),bt=i((e,t)=>(e.forEach(function(c){let d=W(c.src),u=W(c.dst);t.setEdge(d,u,{relationship:c})}),e),"addRelationships"),kt=i(function(e,t){t.nodes().forEach(function(c){c!==void 0&&t.node(c)!==void 0&&(e.select("#"+c),e.select("#"+c).attr("transform","translate("+(t.node(c).x-t.node(c).width/2)+","+(t.node(c).y-t.node(c).height/2)+" )"))})},"adjustEntities"),W=i(e=>e.replace(/\s/g,"").replace(/\./g,"_"),"elementString"),It=i((e,t,c,d)=>{g=ne().requirement;let u=g.securityLevel,p;u==="sandbox"&&(p=se("#i"+t));let h=(u==="sandbox"?se(p.nodes()[0].contentDocument.body):se("body")).select(`[id='${t}']`);_e.insertLineEndings(h,g);let o=new Me({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:g.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}}),_=d.db.getRequirements(),m=d.db.getElements(),k=d.db.getRelationships();mt(_,o,h),Rt(m,o,h),bt(k,o),Fe(o),kt(h,o),k.forEach(function(v){Et(h,v,o,t,d)});let I=g.rect_padding,w=h.node().getBBox(),$=w.width+I*2,x=w.height+I*2;ve(h,x,$,g.useMaxWidth),h.attr("viewBox",`${w.x-I} ${w.y-I} ${$} ${x}`)},"draw"),We={draw:It};var Xt={parser:De,db:Pe,renderer:We,styles:Ye};export{Xt as diagram};
