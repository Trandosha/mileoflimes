;function decrypt(o,r,t){if(t%2===0)for(var e=1,a=1;t/2>=a;a++)foo=o*o%r,e=foo*e%r;else for(var e=o,a=1;t/2>=a;a++)foo=o*o%r,e=foo*e%r;return e}jQuery(document).ready(function($){$("a.zulu").each(function(){c=$(this).data("value").replace("@","@")+" ";for(var o=0,r=0,t=c.length,e=0,a=0,f="",n=0;t>n;n++){for(e=0,a=0;32!=c.charCodeAt(n);)e=10*e,e=e+c.charCodeAt(n)-48,n++;0===o?o=e:0===r?r=e:f+=String.fromCharCode(decrypt(e,o,r))}this.href="mailto:"+f,"#"==this.text&&(this.innerHTML=f)})});