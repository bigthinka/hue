ace.define("ace/mode/flink_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){var e="ADD|ADMIN|AFTER|ALL|ALTER|ANALYZE|AND|ARCHIVE|AS|ASC|AUTHORIZATION|BEFORE|BETWEEN|BOTH|BUCKET|BUCKETS|BY|CACHE|CASCADE|CASE|CAST|CHANGE|CLUSTER|CLUSTERED|CLUSTERSTATUS|COLLECTION|COLUMN|COLUMNS|COMMENT|COMMIT|COMPACT|COMPACTIONS|COMPUTE|CONCATENATE|CONF|CONSTRAINT|CONTINUE|CREATE|CROSS|CUBE|CURRENT|CURRENT_DATE|CURRENT_TIMESTAMP|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DAY|DAYOFWEEK|DBPROPERTIES|DEFERRED|DEFINED|DELETE|DEPENDENCY|DESC|DESCRIBE|DIRECTORIES|DIRECTORY|DISABLE|DISTINCT|DISTRIBUTE|DROP|ELEM_TYPE|ELSE|ENABLE|END|ESCAPED|EXCHANGE|EXCLUSIVE|EXISTS|EXPLAIN|EXPORT|EXTENDED|EXTERNAL|EXTRACT|FETCH|FIELDS|FILE|FILEFORMAT|FIRST|FLOOR|FOLLOWING|FOR|FOREIGN|FORMAT|FORMATTED|FROM|FULL|FUNCTION|FUNCTIONS|GRANT|GROUP|GROUPING|HAVING|HOLD_DDLTIME|HOUR|IDXPROPERTIES|IF|IGNORE|IMPORT|IN|INDEX|INDEXES|INNER|INPATH|INPUTDRIVER|INPUTFORMAT|INSERT|INTERSECT|INTERVAL|INTO|IS|ITEMS|JAR|JOIN|KEY|KEYS|KEY_TYPE|LATERAL|LEFT|LESS|LIKE|LIMIT|LINES|LOAD|LOCAL|LOCATION|LOCK|LOCKS|LOGICAL|LONG|MACRO|MAPJOIN|MATERIALIZED|MINUS|MINUTE|MONTH|MORE|MSCK|NONE|NOSCAN|NOVALIDATE|NOT|NO_DROP|OF|OFFLINE|ON|ONLY|OPTION|OR|ORDER|OUT|OUTER|OUTPUTDRIVER|OUTPUTFORMAT|OVER|OVERWRITE|OWNER|PARTIALSCAN|PARTITION|PARTITIONED|PARTITIONS|PERCENT|PLUS|PRECEDING|PRECISION|PRESERVE|PRETTY|PRIMARY|PRINCIPALS|PROCEDURE|PROTECTION|PURGE|RANGE|READ|READONLY|READS|REBUILD|RECORDREADER|RECORDWRITER|REDUCE|REFERENCES|REGEXP|RELOAD|RENAME|REPAIR|REPLACE|RESTRICT|REVOKE|REWRITE|RIGHT|RLIKE|ROLE|ROLES|ROLLBACK|ROLLUP|ROW|ROWS|SCHEMA|SCHEMAS|SECOND|SELECT|SEMI|SERDEPROPERTIES|SERVER|SET|SETS|SHARED|SHOW|SHOW_DATABASE|SKEWED|SORT|SORTED|SSL|START|STATISTICS|STORED|STREAMTABLE|SYNC|TABLE|TABLES|TABLESAMPLE|TBLPROPERTIES|TEMPORARY|TERMINATED|THEN|TO|TOUCH|TRANSACTIONAL|TRANSACTIONS|TRANSFORM|TRIGGER|TRUNCATE|UNARCHIVE|UNBOUNDED|UNDO|UNION|UNIQUEJOIN|UNLOCK|UNSET|UNSIGNED|UTC_TIMESTAMP|UPDATE|URI|USE|USER|USING|UTC|UTCTIMESTAMP|VALUES|VALUE_TYPE|VIEW|VIEWS|WHEN|WHERE|WHILE|WINDOW|WITH|YEAR",t="FALSE|NULL|TRUE",n="ABS|ACOS|ADD_MONTHS|AES_DECRYPT|AES_ENCRYPT|ARRAY|ARRAY_CONTAINS|ASCII|ASIN|ATAN|AVG|BASE64|BIN|BINARY|BROUND|CAST|CBRT|CEIL|CEILING|COALESCE|COLLECT_LIST|COLLECT_SET|CONCAT|CONCAT_WS|CONTEXT_NGRAMS|CONV|CORR|COS|COVAR_POP|COVAR_SAMP|COUNT|CRC32|CREATE_UNION|CUME_DIST|CURRENT_DATABASE|CURRENT_DATE|CURRENT_TIMESTAMP|CURRENT_USER|DATE_ADD|DATE_FORMAT|DATE_SUB|DATEDIFF|DAY|DAYOFMONTH|DECODE|DEGREES|DENSE_RANK|E|ENCODE|EXP|EXPLODE|FACTORIAL|FIND_IN_SET|FIRST_VALUE|FLOOR|FORMAT_NUMBER|FROM_UNIXTIME|FROM_UTC_TIMESTAMP|GET_JSON_OBJECT|GREATEST|HASH|HEX|HISTOGRAM_NUMERIC|HOUR|IF|IN_FILE|INLINE|INSTR|INITCAP|ISNOTNULL|ISNULL|JAVA_METHOD|JSON_TUPLE|LAG|LAST_DAY|LAST_VALUE|LEAD|LEAST|LENGTH|LEVENSHTEIN|LCASE|LN|LOCATE|LOG|LOG10|LOG2|LOWER|LPAD|LTRIM|MAP|MAP_KEYS|MAP_VALUES|MAX|MD5|MIN|MINUTE|MONTH|MONTHS_BETWEEN|NAMED_STRUCT|NEGATIVE|NEXT_DAY|NGRAMS|NTILE|NVL|PARSE_URL|PARSE_URL_TUPLE|PERCENT_RANK|PERCENTILE|PERCENTILE_APPROX|PI|PMOD|POSEXPLODE|POSITIVE|POW|POWER|PRINTF|QUARTER|RADIANS|RAND|RANK|REFLECT|REGEXP_EXTRACT|REGEXP_REPLACE|REPEAT|REVERSE|ROUND|ROW_NUMBER|RPAD|RTRIM|SECOND|SHA|SHA1|SHA2|SHIFTLEFT|SHIFTRIGHT|SHIFTRIGHTUNSIGNED|SIGN|SIN|SIZE|SORT_ARRAY|SQRT|STACK|STDDEV_POP|STDDEV_SAMP|STRUCT|SENTENCES|SOUNDEX|SPACE|SPLIT|STR_TO_MAP|SUBSTR|SUBSTRING|SUBSTRING_INDEX|SUM|TAN|TO_DATE|TO_UTC_TIMESTAMP|TRANSLATE|TRIM|TRUNC|UCASE|UNBASE64|UNHEX|UNIX_TIMESTAMP|UPPER|VAR_POP|VAR_SAMP|VARIANCE|WEEKOFYEAR|XPATH|XPATH_BOOLEAN|XPATH_DOUBLE|XPATH_FLOAT|XPATH_INT|XPATH_LONG|XPATH_NUMBER|XPATH_SHORT|XPATH_STRING|YEAR",r="ARRAY|BIGINT|BINARY|BOOLEAN|CHAR|DATE|DECIMAL|DELIMITED|DOUBLE|FLOAT|INT|INTEGER|JSONFILE|MAP|NUMERIC|PRECISION|RCFILE|SEQUENCEFILE|SERDE|SMALLINT|STRING|STRUCT|TEXTFILE|TIME|TIMESTAMP|TINYINT|UNIONTYPE|VARCHAR",i=this.createKeywordMapper({"support.function":n,keyword:e,"constant.language":t,"storage.type":r},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"comment",start:"/\\*",end:"\\*/"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:i,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]},this.normalizeRules()};s.metaData={fileTypes:["flink","ql"],name:"Flink",scopeName:"source.flink"},r.inherits(s,i),t.FlinkHighlightRules=s}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../../range").Range,s=e("./fold_mode").FoldMode,o=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(o,s),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var s=i.match(this.foldingStartMarker);if(s){var o=s.index;if(s[1])return this.openingBracketBlock(e,s[1],n,o);var u=e.getCommentFoldRange(n,o+s[0].length,1);return u&&!u.isMultiLine()&&(r?u=this.getSectionRange(e,n):t!="all"&&(u=null)),u}if(t==="markbegin")return;var s=i.match(this.foldingStopMarker);if(s){var o=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],n,o):e.getCommentFoldRange(n,o,-1)}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),s=t,o=n.length;t+=1;var u=t,a=e.getLength();while(++t<a){n=e.getLine(t);var f=n.search(/\S/);if(f===-1)continue;if(r>f)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=s)break;if(l.isMultiLine())t=l.end.row;else if(r==f)break}u=t}return new i(s,o,u,e.getLine(u).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),s=e.getLength(),o=n,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;while(++n<s){t=e.getLine(n);var f=u.exec(t);if(!f)continue;f[1]?a--:a++;if(!a)break}var l=n;if(l>o)return new i(o,r,l,t.length)}}.call(o.prototype)}),ace.define("ace/mode/folding/sqlserver",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../../range").Range,s=e("./cstyle").FoldMode,o=t.FoldMode=function(){};r.inherits(o,s),function(){this.foldingStartMarker=/(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i,this.startRegionRe=/^\s*(\/\*|--)#?region\b/,this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var s=i.match(this.foldingStartMarker);if(s){var o=s.index;if(s[1])return this.getBeginEndBlock(e,n,o,s[1]);var u=e.getCommentFoldRange(n,o+s[0].length,1);return u&&!u.isMultiLine()&&(r?u=this.getSectionRange(e,n):t!="all"&&(u=null)),u}if(t==="markbegin")return;return},this.getBeginEndBlock=function(e,t,n,r){var s={row:t,column:n+r.length},o=e.getLength(),u,a=1,f=/(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;while(++t<o){u=e.getLine(t);var l=f.exec(u);if(!l)continue;l[1]?a++:a--;if(!a)break}var c=t;if(c>s.row)return new i(s.row,s.column,c,u.length)}}.call(o.prototype)}),ace.define("ace/mode/flink",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/flink_highlight_rules","ace/mode/folding/sqlserver"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,s=e("./flink_highlight_rules").FlinkHighlightRules,o=e("./folding/sqlserver").FoldMode,u=function(){this.HighlightRules=s,this.foldingRules=new o};r.inherits(u,i),function(){this.lineCommentStart="--",this.$id="ace/mode/flink",this.getCompletions=function(e,t,n,r){var i=this.$keywordList||this.$createKeywordList();return i.map(function(e){return{ignoreCase:!0,name:e,value:e,upperCaseValue:e.toUpperCase(),score:1,meta:"keyword"}})}}.call(u.prototype),t.Mode=u})