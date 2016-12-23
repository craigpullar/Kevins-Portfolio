if(Meteor.isClient) {
	
	/*-----------------------*/
	/* DECLARE SUBSCRIPTIONS */
	/*-----------------------*/
	Meteor.subscribe("gallery_images");
	Meteor.subscribe("galleries");
	Meteor.subscribe("images");
	Meteor.subscribe("landscape_slideshow");
	Meteor.subscribe("portrait_slideshow");
	Meteor.subscribe("dictionary");


	/* ------------ */
	/* LANDSCAPE JS */
	/* ------------ */
	Template.admin_landscape.rendered = function() {
		$(function(){
			var TINY=TINY||{},T$=T$||function(i){return document.getElementById(i)},T$$$=T$$$||function(){return document.all?1:0};TINY.editor=function(){var c=[],offset=-30;c['bold']=[4,'Bold','a','bold'];c['italic']=[5,'Italic','a','italic'];c['underline']=[6,'Underline','a','underline'];c['strikethrough']=[7,'Strikethrough','a','strikethrough'];c['subscript']=[8,'Subscript','a','subscript'];c['superscript']=[9,'Superscript','a','superscript'];c['orderedlist']=[10,'Insert Ordered List','a','insertorderedlist'];c['unorderedlist']=[11,'Insert Unordered List','a','insertunorderedlist'];c['outdent']=[12,'Outdent','a','outdent'];c['indent']=[13,'Indent','a','indent'];c['leftalign']=[14,'Left Align','a','justifyleft'];c['centeralign']=[15,'Center Align','a','justifycenter'];c['rightalign']=[16,'Right Align','a','justifyright'];c['blockjustify']=[17,'Block Justify','a','justifyfull'];c['undo']=[18,'Undo','a','undo'];c['redo']=[19,'Redo','a','redo'];c['image']=[20,'Insert Image','i','insertimage','Enter Image URL:','http://'];c['hr']=[21,'Insert Horizontal Rule','a','inserthorizontalrule'];c['link']=[22,'Insert Hyperlink','i','createlink','Enter URL:','http://'];c['unlink']=[23,'Remove Hyperlink','a','unlink'];c['unformat']=[24,'Remove Formatting','a','removeformat'];c['print']=[25,'Print','a','print'];function edit(n,obj){this.n=n;window[n]=this;this.t=T$(obj.id);this.obj=obj;this.xhtml=obj.xhtml;var p=document.createElement('div'),w=document.createElement('div'),h=document.createElement('div'),l=obj.controls.length,i=0;this.i=document.createElement('iframe');this.i.width=obj.width||'500';this.i.height=obj.height||'250';this.ie=T$$$();h.className=obj.rowclass||'tinyeditor-header';p.className=obj.cssclass||'tinyeditor';p.style.width=this.i.width+'px';p.appendChild(h);for(i;i<l;i++){var id=obj.controls[i];if(id=='n'){h=document.createElement('div');h.className=obj.rowclass||'tinyeditor-header';p.appendChild(h)}else if(id=='|'){var d=document.createElement('div');d.className=obj.dividerclass||'tinyeditor-divider';h.appendChild(d)}else if(id=='font'){var sel=document.createElement('select'),fonts=obj.fonts||['Verdana','Arial','Georgia'],fl=fonts.length,x=0;sel.className='tinyeditor-font';sel.onchange=new Function(this.n+'.ddaction(this, "fontname")');sel.options[0]=new Option('Font','');for(x;x<fl;x++){var font=fonts[x];sel.options[x+1]=new Option(font,font)}h.appendChild(sel)}else if(id=='size'){var sel=document.createElement('select'),sizes=obj.sizes||[1,2,3,4,5,6,7],sl=sizes.length,x=0;sel.className='tinyeditor-size';sel.onchange=new Function(this.n+'.ddaction(this, "fontsize")');for(x;x<sl;x++){var size=sizes[x];sel.options[x]=new Option(size,size)}h.appendChild(sel)}else if(id=='style'){var sel=document.createElement('select'),styles=obj.styles||[['Style',''],['Paragraph','<p>'],['Header 1','<h1>'],['Header 2','<h2>'],['Header 3','<h3>'],['Header 4','<h4>'],['Header 5','<h5>'],['Header 6','<h6>']],sl=styles.length,x=0;sel.className='tinyeditor-style';sel.onchange=new Function(this.n+'.ddaction(this, "formatblock")');for(x;x<sl;x++){var style=styles[x];sel.options[x]=new Option(style[0],style[1])}h.appendChild(sel)}else if(c[id]){var div=document.createElement('div'),x=c[id],func=x[2],ex,pos=x[0]*offset;div.className=obj.controlclass;div.unselectable='on';div.style.backgroundPosition='0px '+pos+'px';div.title=x[1];ex=func=='a'?'.action("'+x[3]+'", 0, '+(x[4]||0)+')':'.insert("'+x[4]+'", "'+x[5]+'", "'+x[3]+'")';div.onmousedown=new Function(this.n+(id=='print'?'.print()':ex));div.onmouseover=new Function(this.n+'.hover(this, '+pos+', 1)');div.onmouseout=new Function(this.n+'.hover(this, '+pos+', 0)');h.appendChild(div);if(this.ie){div.unselectable='on'}}}this.t.parentNode.insertBefore(p,this.t);this.t.style.width=this.i.width+'px';w.appendChild(this.t);w.appendChild(this.i);p.appendChild(w);this.t.style.display='none';if(obj.footer){var f=document.createElement('div');f.className=obj.footerclass||'tinyeditor-footer';if(obj.toggle){var to=obj.toggle,ts=document.createElement('div');ts.className=to.cssclass||'toggle';ts.innerHTML=obj.toggletext||'source';ts.onclick=new Function(this.n+'.toggle(0, this);return false');f.appendChild(ts)}if(obj.resize){var ro=obj.resize,rs=document.createElement('div');rs.className=ro.cssclass||'resize';rs.onmousedown=new Function('event',this.n+'.resize(event);return false');rs.onselectstart=function(){return false};f.appendChild(rs)}p.appendChild(f)}this.e=this.i.contentWindow.document;this.e.open();var m='<html><head>',bodyid=obj.bodyid?" id=\""+obj.bodyid+"\"":"";if(obj.cssfile){m+='<link rel="stylesheet" href="'+obj.cssfile+'" />'}if(obj.css){m+='<style type="text/css">'+obj.css+'</style>'}m+='</head><body'+bodyid+' contenteditable="true">'+(obj.content||this.t.value);m+='</body></html>';this.e.write(m);this.e.close();this.e.designMode='On';this.d=1;if(this.xhtml){try{this.e.execCommand("styleWithCSS",0,0)}catch(e){try{this.e.execCommand("useCSS",0,1)}catch(e){}}}};edit.prototype.print=function(){this.i.contentWindow.print()};edit.prototype.hover=function(div,pos,dir){this.getSelection();div.style.backgroundPosition=(dir?'34px ':'0px ')+(pos)+'px'};edit.prototype.getSelection=function(){if(this.ie&&this.e.getSelection){this.sel=this.e.getSelection();if(this.sel.getRangeAt&&this.sel.rangeCount){this.range=this.sel.getRangeAt(0)}}};edit.prototype.restoreSelection=function(){if(this.range&&this.ie){if(this.e.getSelection){this.sel=this.e.getSelection();this.sel.removeAllRanges();this.sel.addRange(this.range)}}};edit.prototype.ddaction=function(dd,a){var i=dd.selectedIndex,v=dd.options[i].value;this.action(a,v)};edit.prototype.action=function(cmd,val,ie){if(ie&&!this.ie){alert('Your browser does not support this function.')}else{this.restoreSelection();this.e.execCommand(cmd,0,val||null)}};edit.prototype.insert=function(pro,msg,cmd){var val=prompt(pro,msg);if(val!=null&&val!=''){this.e.execCommand(cmd,0,val)}};edit.prototype.setfont=function(){this.restoreSelection();execCommand('formatblock',0,hType)};edit.prototype.resize=function(e){if(this.mv){this.freeze()}this.i.bcs=TINY.cursor.top(e);this.mv=new Function('event',this.n+'.move(event)');this.sr=new Function(this.n+'.freeze()');if(this.ie){document.attachEvent('onmousemove',this.mv);document.attachEvent('onmouseup',this.sr)}else{document.addEventListener('mousemove',this.mv,1);document.addEventListener('mouseup',this.sr,1)}};edit.prototype.move=function(e){var pos=TINY.cursor.top(e);this.i.height=parseInt(this.i.height)+pos-this.i.bcs;this.i.bcs=pos};edit.prototype.freeze=function(){if(this.ie){document.detachEvent('onmousemove',this.mv);document.detachEvent('onmouseup',this.sr)}else{document.removeEventListener('mousemove',this.mv,1);document.removeEventListener('mouseup',this.sr,1)}};edit.prototype.toggle=function(post,div){if(!this.d){var v=this.t.value;if(div){div.innerHTML=this.obj.toggletext||'source'}if(this.xhtml&&!this.ie){v=v.replace(/<strong>(.*)<\/strong>/gi,'<span style="font-weight:bold;">$1</span>');v=v.replace(/<em>(.*)<\/em>/gi,'<span style="font-weight:italic;">$1</span>')}this.e.body.innerHTML=v;this.t.style.display='none';this.i.style.display='block';this.d=1}else{var v=this.e.body.innerHTML;if(this.xhtml){v=v.replace(/<span class="apple-style-span">(.*)<\/span>/gi,'$1');v=v.replace(/ class="apple-style-span"/gi,'');v=v.replace(/<span style="">/gi,'');v=v.replace(/<br>/gi,'<br />');v=v.replace(/<br ?\/?>$/gi,'');v=v.replace(/^<br ?\/?>/gi,'');v=v.replace(/(<img [^>]+[^\/])>/gi,'$1 />');v=v.replace(/<b\b[^>]*>(.*?)<\/b[^>]*>/gi,'<strong>$1</strong>');v=v.replace(/<i\b[^>]*>(.*?)<\/i[^>]*>/gi,'<em>$1</em>');v=v.replace(/<u\b[^>]*>(.*?)<\/u[^>]*>/gi,'<span style="text-decoration:underline">$1</span>');v=v.replace(/<(b|strong|em|i|u) style="font-weight:normal;?">(.*)<\/(b|strong|em|i|u)>/gi,'$2');v=v.replace(/<(b|strong|em|i|u) style="(.*)">(.*)<\/(b|strong|em|i|u)>/gi,'<span style="$2"><$4>$3</$4></span>');v=v.replace(/<span style="font-weight:normal;?">(.*)<\/span>/gi,'$1');v=v.replace(/<span style="font-weight:bold;?">(.*)<\/span>/gi,'<strong>$1</strong>');v=v.replace(/<span style="font-style:italic;?">(.*)<\/span>/gi,'<em>$1</em>');v=v.replace(/<span style="font-weight:bold;?">(.*)<\/span>|<b\b[^>]*>(.*?)<\/b[^>]*>/gi,'<strong>$1</strong>')}if(div){div.innerHTML=this.obj.toggletext||'wysiwyg'}this.t.value=v;if(!post){this.t.style.height=this.i.height+'px';this.i.style.display='none';this.t.style.display='block';this.d=0}}};edit.prototype.post=function(){if(this.d){this.toggle(1)}};return{edit:edit}}();TINY.cursor=function(){return{top:function(e){return T$$$()?window.event.clientY+document.documentElement.scrollTop+document.body.scrollTop:e.clientY+window.scrollY}}}();
			new TINY.editor.edit('editor',{			
				id:'intro-content', 
				cssclass:'tinyeditor', 
				controlclass:'tinyeditor-control', 
				rowclass:'tinyeditor-header',
				dividerclass:'tinyeditor-divider',
				controls:['bold', 'italic', 'underline', 'strikethrough', '|', 'subscript', 'superscript', '|', 'orderedlist', 'unorderedlist', '|' ,'outdent' ,'indent', '|', 'leftalign', 'centeralign', 'rightalign', 'blockjustify', '|', 'unformat', '|', 'undo', 'redo', 'n', 'style', '|', 'image', 'hr', 'link', 'unlink', '|', 'print'],
				css:'body{background-color:#fff;}', 
				bodyid:'editor', 
			});
		});
};


Template.admin_landscape.events({
	"click a#add_gallery_button": function() {
		Router.go('/admin/new-gallery/landscape');
	},
	"click a#description": function(event) {
		event.preventDefault();
			// Session.set('current_slideshow_store', 'portrait');
			$('a#gallery').removeClass('active');
			$('a#description').addClass('active');
			$('.gallery_container').hide();
			$('.intro_container').fadeIn();
		},
		"click a#gallery": function(event) {
			event.preventDefault();
			// Session.set('current_slideshow_store', 'portrait');
			$('a#description').removeClass('active');
			$('a#gallery').addClass('active');
			$('.intro_container').hide();
			$('.gallery_container').fadeIn();
		},
		"submit .intro_container form" : function(event) {
			event.preventDefault();
			var value = event.target.content.value;

			// Dictionary.insert({
			// 	_id: 'landscape_intro',
			// 	content : value
			// });
			Dictionary.update({_id : 'landscape_intro'}, {$set: {content: value}} );
			// console.log(Dictionary.find({_id : 'wedding_intro'}).fetch()[0].content);

			$('p.success').fadeIn(500, function(){
				$(this).delay(1500).fadeOut();
			});
		}
	});
Template.admin_landscape.helpers({
	Galleries: function () {
		return Galleries.find({type: "landscape"}, {sort: {createdAt: -1}});
	},
	description: function() {
		// console.log(Dictionary.find({_id : 'wedding_intro'}).fetch()[0].content);
		return Dictionary.find({_id : 'landscape_intro'}).fetch()[0].content;
	}
});

/*------------*/
/* WEDDING JS */
/*------------*/
Template.admin_weddings.rendered = function() {
	$(function(){
		var TINY=TINY||{},T$=T$||function(i){return document.getElementById(i)},T$$$=T$$$||function(){return document.all?1:0};TINY.editor=function(){var c=[],offset=-30;c['bold']=[4,'Bold','a','bold'];c['italic']=[5,'Italic','a','italic'];c['underline']=[6,'Underline','a','underline'];c['strikethrough']=[7,'Strikethrough','a','strikethrough'];c['subscript']=[8,'Subscript','a','subscript'];c['superscript']=[9,'Superscript','a','superscript'];c['orderedlist']=[10,'Insert Ordered List','a','insertorderedlist'];c['unorderedlist']=[11,'Insert Unordered List','a','insertunorderedlist'];c['outdent']=[12,'Outdent','a','outdent'];c['indent']=[13,'Indent','a','indent'];c['leftalign']=[14,'Left Align','a','justifyleft'];c['centeralign']=[15,'Center Align','a','justifycenter'];c['rightalign']=[16,'Right Align','a','justifyright'];c['blockjustify']=[17,'Block Justify','a','justifyfull'];c['undo']=[18,'Undo','a','undo'];c['redo']=[19,'Redo','a','redo'];c['image']=[20,'Insert Image','i','insertimage','Enter Image URL:','http://'];c['hr']=[21,'Insert Horizontal Rule','a','inserthorizontalrule'];c['link']=[22,'Insert Hyperlink','i','createlink','Enter URL:','http://'];c['unlink']=[23,'Remove Hyperlink','a','unlink'];c['unformat']=[24,'Remove Formatting','a','removeformat'];c['print']=[25,'Print','a','print'];function edit(n,obj){this.n=n;window[n]=this;this.t=T$(obj.id);this.obj=obj;this.xhtml=obj.xhtml;var p=document.createElement('div'),w=document.createElement('div'),h=document.createElement('div'),l=obj.controls.length,i=0;this.i=document.createElement('iframe');this.i.width=obj.width||'500';this.i.height=obj.height||'250';this.ie=T$$$();h.className=obj.rowclass||'tinyeditor-header';p.className=obj.cssclass||'tinyeditor';p.style.width=this.i.width+'px';p.appendChild(h);for(i;i<l;i++){var id=obj.controls[i];if(id=='n'){h=document.createElement('div');h.className=obj.rowclass||'tinyeditor-header';p.appendChild(h)}else if(id=='|'){var d=document.createElement('div');d.className=obj.dividerclass||'tinyeditor-divider';h.appendChild(d)}else if(id=='font'){var sel=document.createElement('select'),fonts=obj.fonts||['Verdana','Arial','Georgia'],fl=fonts.length,x=0;sel.className='tinyeditor-font';sel.onchange=new Function(this.n+'.ddaction(this, "fontname")');sel.options[0]=new Option('Font','');for(x;x<fl;x++){var font=fonts[x];sel.options[x+1]=new Option(font,font)}h.appendChild(sel)}else if(id=='size'){var sel=document.createElement('select'),sizes=obj.sizes||[1,2,3,4,5,6,7],sl=sizes.length,x=0;sel.className='tinyeditor-size';sel.onchange=new Function(this.n+'.ddaction(this, "fontsize")');for(x;x<sl;x++){var size=sizes[x];sel.options[x]=new Option(size,size)}h.appendChild(sel)}else if(id=='style'){var sel=document.createElement('select'),styles=obj.styles||[['Style',''],['Paragraph','<p>'],['Header 1','<h1>'],['Header 2','<h2>'],['Header 3','<h3>'],['Header 4','<h4>'],['Header 5','<h5>'],['Header 6','<h6>']],sl=styles.length,x=0;sel.className='tinyeditor-style';sel.onchange=new Function(this.n+'.ddaction(this, "formatblock")');for(x;x<sl;x++){var style=styles[x];sel.options[x]=new Option(style[0],style[1])}h.appendChild(sel)}else if(c[id]){var div=document.createElement('div'),x=c[id],func=x[2],ex,pos=x[0]*offset;div.className=obj.controlclass;div.unselectable='on';div.style.backgroundPosition='0px '+pos+'px';div.title=x[1];ex=func=='a'?'.action("'+x[3]+'", 0, '+(x[4]||0)+')':'.insert("'+x[4]+'", "'+x[5]+'", "'+x[3]+'")';div.onmousedown=new Function(this.n+(id=='print'?'.print()':ex));div.onmouseover=new Function(this.n+'.hover(this, '+pos+', 1)');div.onmouseout=new Function(this.n+'.hover(this, '+pos+', 0)');h.appendChild(div);if(this.ie){div.unselectable='on'}}}this.t.parentNode.insertBefore(p,this.t);this.t.style.width=this.i.width+'px';w.appendChild(this.t);w.appendChild(this.i);p.appendChild(w);this.t.style.display='none';if(obj.footer){var f=document.createElement('div');f.className=obj.footerclass||'tinyeditor-footer';if(obj.toggle){var to=obj.toggle,ts=document.createElement('div');ts.className=to.cssclass||'toggle';ts.innerHTML=obj.toggletext||'source';ts.onclick=new Function(this.n+'.toggle(0, this);return false');f.appendChild(ts)}if(obj.resize){var ro=obj.resize,rs=document.createElement('div');rs.className=ro.cssclass||'resize';rs.onmousedown=new Function('event',this.n+'.resize(event);return false');rs.onselectstart=function(){return false};f.appendChild(rs)}p.appendChild(f)}this.e=this.i.contentWindow.document;this.e.open();var m='<html><head>',bodyid=obj.bodyid?" id=\""+obj.bodyid+"\"":"";if(obj.cssfile){m+='<link rel="stylesheet" href="'+obj.cssfile+'" />'}if(obj.css){m+='<style type="text/css">'+obj.css+'</style>'}m+='</head><body'+bodyid+' contenteditable="true">'+(obj.content||this.t.value);m+='</body></html>';this.e.write(m);this.e.close();this.e.designMode='On';this.d=1;if(this.xhtml){try{this.e.execCommand("styleWithCSS",0,0)}catch(e){try{this.e.execCommand("useCSS",0,1)}catch(e){}}}};edit.prototype.print=function(){this.i.contentWindow.print()};edit.prototype.hover=function(div,pos,dir){this.getSelection();div.style.backgroundPosition=(dir?'34px ':'0px ')+(pos)+'px'};edit.prototype.getSelection=function(){if(this.ie&&this.e.getSelection){this.sel=this.e.getSelection();if(this.sel.getRangeAt&&this.sel.rangeCount){this.range=this.sel.getRangeAt(0)}}};edit.prototype.restoreSelection=function(){if(this.range&&this.ie){if(this.e.getSelection){this.sel=this.e.getSelection();this.sel.removeAllRanges();this.sel.addRange(this.range)}}};edit.prototype.ddaction=function(dd,a){var i=dd.selectedIndex,v=dd.options[i].value;this.action(a,v)};edit.prototype.action=function(cmd,val,ie){if(ie&&!this.ie){alert('Your browser does not support this function.')}else{this.restoreSelection();this.e.execCommand(cmd,0,val||null)}};edit.prototype.insert=function(pro,msg,cmd){var val=prompt(pro,msg);if(val!=null&&val!=''){this.e.execCommand(cmd,0,val)}};edit.prototype.setfont=function(){this.restoreSelection();execCommand('formatblock',0,hType)};edit.prototype.resize=function(e){if(this.mv){this.freeze()}this.i.bcs=TINY.cursor.top(e);this.mv=new Function('event',this.n+'.move(event)');this.sr=new Function(this.n+'.freeze()');if(this.ie){document.attachEvent('onmousemove',this.mv);document.attachEvent('onmouseup',this.sr)}else{document.addEventListener('mousemove',this.mv,1);document.addEventListener('mouseup',this.sr,1)}};edit.prototype.move=function(e){var pos=TINY.cursor.top(e);this.i.height=parseInt(this.i.height)+pos-this.i.bcs;this.i.bcs=pos};edit.prototype.freeze=function(){if(this.ie){document.detachEvent('onmousemove',this.mv);document.detachEvent('onmouseup',this.sr)}else{document.removeEventListener('mousemove',this.mv,1);document.removeEventListener('mouseup',this.sr,1)}};edit.prototype.toggle=function(post,div){if(!this.d){var v=this.t.value;if(div){div.innerHTML=this.obj.toggletext||'source'}if(this.xhtml&&!this.ie){v=v.replace(/<strong>(.*)<\/strong>/gi,'<span style="font-weight:bold;">$1</span>');v=v.replace(/<em>(.*)<\/em>/gi,'<span style="font-weight:italic;">$1</span>')}this.e.body.innerHTML=v;this.t.style.display='none';this.i.style.display='block';this.d=1}else{var v=this.e.body.innerHTML;if(this.xhtml){v=v.replace(/<span class="apple-style-span">(.*)<\/span>/gi,'$1');v=v.replace(/ class="apple-style-span"/gi,'');v=v.replace(/<span style="">/gi,'');v=v.replace(/<br>/gi,'<br />');v=v.replace(/<br ?\/?>$/gi,'');v=v.replace(/^<br ?\/?>/gi,'');v=v.replace(/(<img [^>]+[^\/])>/gi,'$1 />');v=v.replace(/<b\b[^>]*>(.*?)<\/b[^>]*>/gi,'<strong>$1</strong>');v=v.replace(/<i\b[^>]*>(.*?)<\/i[^>]*>/gi,'<em>$1</em>');v=v.replace(/<u\b[^>]*>(.*?)<\/u[^>]*>/gi,'<span style="text-decoration:underline">$1</span>');v=v.replace(/<(b|strong|em|i|u) style="font-weight:normal;?">(.*)<\/(b|strong|em|i|u)>/gi,'$2');v=v.replace(/<(b|strong|em|i|u) style="(.*)">(.*)<\/(b|strong|em|i|u)>/gi,'<span style="$2"><$4>$3</$4></span>');v=v.replace(/<span style="font-weight:normal;?">(.*)<\/span>/gi,'$1');v=v.replace(/<span style="font-weight:bold;?">(.*)<\/span>/gi,'<strong>$1</strong>');v=v.replace(/<span style="font-style:italic;?">(.*)<\/span>/gi,'<em>$1</em>');v=v.replace(/<span style="font-weight:bold;?">(.*)<\/span>|<b\b[^>]*>(.*?)<\/b[^>]*>/gi,'<strong>$1</strong>')}if(div){div.innerHTML=this.obj.toggletext||'wysiwyg'}this.t.value=v;if(!post){this.t.style.height=this.i.height+'px';this.i.style.display='none';this.t.style.display='block';this.d=0}}};edit.prototype.post=function(){if(this.d){this.toggle(1)}};return{edit:edit}}();TINY.cursor=function(){return{top:function(e){return T$$$()?window.event.clientY+document.documentElement.scrollTop+document.body.scrollTop:e.clientY+window.scrollY}}}();
		new TINY.editor.edit('editor',{			
			id:'intro-content', 
			cssclass:'tinyeditor', 
			controlclass:'tinyeditor-control', 
			rowclass:'tinyeditor-header',
			dividerclass:'tinyeditor-divider',
			controls:['bold', 'italic', 'underline', 'strikethrough', '|', 'subscript', 'superscript', '|', 'orderedlist', 'unorderedlist', '|' ,'outdent' ,'indent', '|', 'leftalign', 'centeralign', 'rightalign', 'blockjustify', '|', 'unformat', '|', 'undo', 'redo', 'n', 'style', '|', 'image', 'hr', 'link', 'unlink', '|', 'print'],
			css:'body{background-color:#fff;}', 
			bodyid:'editor', 
		});
	});
};
Template.admin_weddings.events({
	"click a#add_gallery_button": function() {
		Router.go('/admin/new-gallery/wedding');
	},
	"click a#description": function(event) {
		event.preventDefault();
			// Session.set('current_slideshow_store', 'portrait');
			$('a#gallery').removeClass('active');
			$('a#description').addClass('active');
			$('.gallery_container').hide();
			$('.intro_container').fadeIn();
		},
		"click a#gallery": function(event) {
			event.preventDefault();
			// Session.set('current_slideshow_store', 'portrait');
			$('a#description').removeClass('active');
			$('a#gallery').addClass('active');
			$('.intro_container').hide();
			$('.gallery_container').fadeIn();
		},
		"submit .intro_container form" : function(event) {
			event.preventDefault();
			var value = event.target.content.value;
			// console.log(value);
			Dictionary.insert({
				_id: 'wedding_intro',
				content : value
			});
			Dictionary.update({_id : 'wedding_intro'}, {$set: {content: value}} );
			// console.log(Dictionary.find({_id : 'wedding_intro'}).fetch()[0].content);

			$('p.success').fadeIn(500, function(){
				$(this).delay(1500).fadeOut();
			});
		}
	});
Template.admin_weddings.helpers({
	Galleries: function () {
		return Galleries.find({type: "wedding"}, {sort: {createdAt: -1}});
	},
	description: function() {
		// console.log(Dictionary.find({_id : 'wedding_intro'}).fetch()[0].content);
		return Dictionary.find({_id : 'wedding_intro'}).fetch()[0].content;
	}
});

/*-------------*/
/* POTRAITS JS */
/*-------------*/
Template.admin_portraits.rendered = function() {
	$(function(){
		var TINY=TINY||{},T$=T$||function(i){return document.getElementById(i)},T$$$=T$$$||function(){return document.all?1:0};TINY.editor=function(){var c=[],offset=-30;c['bold']=[4,'Bold','a','bold'];c['italic']=[5,'Italic','a','italic'];c['underline']=[6,'Underline','a','underline'];c['strikethrough']=[7,'Strikethrough','a','strikethrough'];c['subscript']=[8,'Subscript','a','subscript'];c['superscript']=[9,'Superscript','a','superscript'];c['orderedlist']=[10,'Insert Ordered List','a','insertorderedlist'];c['unorderedlist']=[11,'Insert Unordered List','a','insertunorderedlist'];c['outdent']=[12,'Outdent','a','outdent'];c['indent']=[13,'Indent','a','indent'];c['leftalign']=[14,'Left Align','a','justifyleft'];c['centeralign']=[15,'Center Align','a','justifycenter'];c['rightalign']=[16,'Right Align','a','justifyright'];c['blockjustify']=[17,'Block Justify','a','justifyfull'];c['undo']=[18,'Undo','a','undo'];c['redo']=[19,'Redo','a','redo'];c['image']=[20,'Insert Image','i','insertimage','Enter Image URL:','http://'];c['hr']=[21,'Insert Horizontal Rule','a','inserthorizontalrule'];c['link']=[22,'Insert Hyperlink','i','createlink','Enter URL:','http://'];c['unlink']=[23,'Remove Hyperlink','a','unlink'];c['unformat']=[24,'Remove Formatting','a','removeformat'];c['print']=[25,'Print','a','print'];function edit(n,obj){this.n=n;window[n]=this;this.t=T$(obj.id);this.obj=obj;this.xhtml=obj.xhtml;var p=document.createElement('div'),w=document.createElement('div'),h=document.createElement('div'),l=obj.controls.length,i=0;this.i=document.createElement('iframe');this.i.width=obj.width||'500';this.i.height=obj.height||'250';this.ie=T$$$();h.className=obj.rowclass||'tinyeditor-header';p.className=obj.cssclass||'tinyeditor';p.style.width=this.i.width+'px';p.appendChild(h);for(i;i<l;i++){var id=obj.controls[i];if(id=='n'){h=document.createElement('div');h.className=obj.rowclass||'tinyeditor-header';p.appendChild(h)}else if(id=='|'){var d=document.createElement('div');d.className=obj.dividerclass||'tinyeditor-divider';h.appendChild(d)}else if(id=='font'){var sel=document.createElement('select'),fonts=obj.fonts||['Verdana','Arial','Georgia'],fl=fonts.length,x=0;sel.className='tinyeditor-font';sel.onchange=new Function(this.n+'.ddaction(this, "fontname")');sel.options[0]=new Option('Font','');for(x;x<fl;x++){var font=fonts[x];sel.options[x+1]=new Option(font,font)}h.appendChild(sel)}else if(id=='size'){var sel=document.createElement('select'),sizes=obj.sizes||[1,2,3,4,5,6,7],sl=sizes.length,x=0;sel.className='tinyeditor-size';sel.onchange=new Function(this.n+'.ddaction(this, "fontsize")');for(x;x<sl;x++){var size=sizes[x];sel.options[x]=new Option(size,size)}h.appendChild(sel)}else if(id=='style'){var sel=document.createElement('select'),styles=obj.styles||[['Style',''],['Paragraph','<p>'],['Header 1','<h1>'],['Header 2','<h2>'],['Header 3','<h3>'],['Header 4','<h4>'],['Header 5','<h5>'],['Header 6','<h6>']],sl=styles.length,x=0;sel.className='tinyeditor-style';sel.onchange=new Function(this.n+'.ddaction(this, "formatblock")');for(x;x<sl;x++){var style=styles[x];sel.options[x]=new Option(style[0],style[1])}h.appendChild(sel)}else if(c[id]){var div=document.createElement('div'),x=c[id],func=x[2],ex,pos=x[0]*offset;div.className=obj.controlclass;div.unselectable='on';div.style.backgroundPosition='0px '+pos+'px';div.title=x[1];ex=func=='a'?'.action("'+x[3]+'", 0, '+(x[4]||0)+')':'.insert("'+x[4]+'", "'+x[5]+'", "'+x[3]+'")';div.onmousedown=new Function(this.n+(id=='print'?'.print()':ex));div.onmouseover=new Function(this.n+'.hover(this, '+pos+', 1)');div.onmouseout=new Function(this.n+'.hover(this, '+pos+', 0)');h.appendChild(div);if(this.ie){div.unselectable='on'}}}this.t.parentNode.insertBefore(p,this.t);this.t.style.width=this.i.width+'px';w.appendChild(this.t);w.appendChild(this.i);p.appendChild(w);this.t.style.display='none';if(obj.footer){var f=document.createElement('div');f.className=obj.footerclass||'tinyeditor-footer';if(obj.toggle){var to=obj.toggle,ts=document.createElement('div');ts.className=to.cssclass||'toggle';ts.innerHTML=obj.toggletext||'source';ts.onclick=new Function(this.n+'.toggle(0, this);return false');f.appendChild(ts)}if(obj.resize){var ro=obj.resize,rs=document.createElement('div');rs.className=ro.cssclass||'resize';rs.onmousedown=new Function('event',this.n+'.resize(event);return false');rs.onselectstart=function(){return false};f.appendChild(rs)}p.appendChild(f)}this.e=this.i.contentWindow.document;this.e.open();var m='<html><head>',bodyid=obj.bodyid?" id=\""+obj.bodyid+"\"":"";if(obj.cssfile){m+='<link rel="stylesheet" href="'+obj.cssfile+'" />'}if(obj.css){m+='<style type="text/css">'+obj.css+'</style>'}m+='</head><body'+bodyid+' contenteditable="true">'+(obj.content||this.t.value);m+='</body></html>';this.e.write(m);this.e.close();this.e.designMode='On';this.d=1;if(this.xhtml){try{this.e.execCommand("styleWithCSS",0,0)}catch(e){try{this.e.execCommand("useCSS",0,1)}catch(e){}}}};edit.prototype.print=function(){this.i.contentWindow.print()};edit.prototype.hover=function(div,pos,dir){this.getSelection();div.style.backgroundPosition=(dir?'34px ':'0px ')+(pos)+'px'};edit.prototype.getSelection=function(){if(this.ie&&this.e.getSelection){this.sel=this.e.getSelection();if(this.sel.getRangeAt&&this.sel.rangeCount){this.range=this.sel.getRangeAt(0)}}};edit.prototype.restoreSelection=function(){if(this.range&&this.ie){if(this.e.getSelection){this.sel=this.e.getSelection();this.sel.removeAllRanges();this.sel.addRange(this.range)}}};edit.prototype.ddaction=function(dd,a){var i=dd.selectedIndex,v=dd.options[i].value;this.action(a,v)};edit.prototype.action=function(cmd,val,ie){if(ie&&!this.ie){alert('Your browser does not support this function.')}else{this.restoreSelection();this.e.execCommand(cmd,0,val||null)}};edit.prototype.insert=function(pro,msg,cmd){var val=prompt(pro,msg);if(val!=null&&val!=''){this.e.execCommand(cmd,0,val)}};edit.prototype.setfont=function(){this.restoreSelection();execCommand('formatblock',0,hType)};edit.prototype.resize=function(e){if(this.mv){this.freeze()}this.i.bcs=TINY.cursor.top(e);this.mv=new Function('event',this.n+'.move(event)');this.sr=new Function(this.n+'.freeze()');if(this.ie){document.attachEvent('onmousemove',this.mv);document.attachEvent('onmouseup',this.sr)}else{document.addEventListener('mousemove',this.mv,1);document.addEventListener('mouseup',this.sr,1)}};edit.prototype.move=function(e){var pos=TINY.cursor.top(e);this.i.height=parseInt(this.i.height)+pos-this.i.bcs;this.i.bcs=pos};edit.prototype.freeze=function(){if(this.ie){document.detachEvent('onmousemove',this.mv);document.detachEvent('onmouseup',this.sr)}else{document.removeEventListener('mousemove',this.mv,1);document.removeEventListener('mouseup',this.sr,1)}};edit.prototype.toggle=function(post,div){if(!this.d){var v=this.t.value;if(div){div.innerHTML=this.obj.toggletext||'source'}if(this.xhtml&&!this.ie){v=v.replace(/<strong>(.*)<\/strong>/gi,'<span style="font-weight:bold;">$1</span>');v=v.replace(/<em>(.*)<\/em>/gi,'<span style="font-weight:italic;">$1</span>')}this.e.body.innerHTML=v;this.t.style.display='none';this.i.style.display='block';this.d=1}else{var v=this.e.body.innerHTML;if(this.xhtml){v=v.replace(/<span class="apple-style-span">(.*)<\/span>/gi,'$1');v=v.replace(/ class="apple-style-span"/gi,'');v=v.replace(/<span style="">/gi,'');v=v.replace(/<br>/gi,'<br />');v=v.replace(/<br ?\/?>$/gi,'');v=v.replace(/^<br ?\/?>/gi,'');v=v.replace(/(<img [^>]+[^\/])>/gi,'$1 />');v=v.replace(/<b\b[^>]*>(.*?)<\/b[^>]*>/gi,'<strong>$1</strong>');v=v.replace(/<i\b[^>]*>(.*?)<\/i[^>]*>/gi,'<em>$1</em>');v=v.replace(/<u\b[^>]*>(.*?)<\/u[^>]*>/gi,'<span style="text-decoration:underline">$1</span>');v=v.replace(/<(b|strong|em|i|u) style="font-weight:normal;?">(.*)<\/(b|strong|em|i|u)>/gi,'$2');v=v.replace(/<(b|strong|em|i|u) style="(.*)">(.*)<\/(b|strong|em|i|u)>/gi,'<span style="$2"><$4>$3</$4></span>');v=v.replace(/<span style="font-weight:normal;?">(.*)<\/span>/gi,'$1');v=v.replace(/<span style="font-weight:bold;?">(.*)<\/span>/gi,'<strong>$1</strong>');v=v.replace(/<span style="font-style:italic;?">(.*)<\/span>/gi,'<em>$1</em>');v=v.replace(/<span style="font-weight:bold;?">(.*)<\/span>|<b\b[^>]*>(.*?)<\/b[^>]*>/gi,'<strong>$1</strong>')}if(div){div.innerHTML=this.obj.toggletext||'wysiwyg'}this.t.value=v;if(!post){this.t.style.height=this.i.height+'px';this.i.style.display='none';this.t.style.display='block';this.d=0}}};edit.prototype.post=function(){if(this.d){this.toggle(1)}};return{edit:edit}}();TINY.cursor=function(){return{top:function(e){return T$$$()?window.event.clientY+document.documentElement.scrollTop+document.body.scrollTop:e.clientY+window.scrollY}}}();
		new TINY.editor.edit('editor',{			
			id:'intro-content', 
			cssclass:'tinyeditor', 
			controlclass:'tinyeditor-control', 
			rowclass:'tinyeditor-header',
			dividerclass:'tinyeditor-divider',
			controls:['bold', 'italic', 'underline', 'strikethrough', '|', 'subscript', 'superscript', '|', 'orderedlist', 'unorderedlist', '|' ,'outdent' ,'indent', '|', 'leftalign', 'centeralign', 'rightalign', 'blockjustify', '|', 'unformat', '|', 'undo', 'redo', 'n', 'style', '|', 'image', 'hr', 'link', 'unlink', '|', 'print'],
			css:'body{background-color:#fff;}', 
			bodyid:'editor', 
		});
	});
};
Template.admin_portraits.events({
	"click a#add_gallery_button": function() {
		Router.go('/admin/new-gallery/portrait');
	},
	"click a#description": function(event) {
		event.preventDefault();
			// Session.set('current_slideshow_store', 'portrait');
			$('a#gallery').removeClass('active');
			$('a#description').addClass('active');
			$('.gallery_container').hide();
			$('.intro_container').fadeIn();
		},
		"click a#gallery": function(event) {
			event.preventDefault();
			// Session.set('current_slideshow_store', 'portrait');
			$('a#description').removeClass('active');
			$('a#gallery').addClass('active');
			$('.intro_container').hide();
			$('.gallery_container').fadeIn();
		},
		"submit .intro_container form" : function(event) {
			event.preventDefault();
			var value = event.target.content.value;
			// console.log(value);
			// Dictionary.insert({
			// 	_id: 'portrait_intro',
			// 	content : value
			// });
			Dictionary.update({_id : 'portrait_intro'}, {$set: {content: value}} );
			// console.log(Dictionary.find({_id : 'portrait_intro'}).fetch()[0].content);

			$('p.success').fadeIn(500, function(){
				$(this).delay(1500).fadeOut();
			});
		}

	});
Template.admin_portraits.helpers({
	Galleries: function () {
		return Galleries.find({type: "portrait"}, {sort: {createdAt: -1}});
	},
	description: function() {
		// console.log(Dictionary.find({_id : 'wedding_intro'}).fetch()[0].content);
		return Dictionary.find({_id : 'portrait_intro'}).fetch()[0].content;
	}
});



/*------------*/
/* GALLERY JS */
/*------------*/

Template.new_gallery.rendered = function () {
	if($('form#add').length){
		console.log('add');
		Date.prototype.toDateInputValue = (function() {
			var local = new Date(this);
			local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
			return local.toJSON().slice(0,10);
		});
		$('input.createdAt').val(new Date().toDateInputValue());
	}
};
Template.new_gallery.events ({
	"click #back_gallery_button" : function(){
		var parts = location.href.split('/');
		var type = parts.pop();
		if (type != 'wedding' && type != 'portrait') {

			var id = parts.pop();
			var new_type = Galleries.findOne({_id: _id}).type;
			Router.go('admin/'+new_type+'s');
		}
		Router.go('admin/'+type+'s');


	},
	"submit form#add": function(event) {
		event.preventDefault();
		var title = event.target.title.value;
		if(title == '') {
			$('#message').fadeIn();
		}else {


			var parts = location.href.split('/');
			var type = parts.pop();
			var priv = event.target.priv.checked;
			var password = event.target.password.value; //GET INFO FROM FORM
			var date = new Date(event.target.createdAt.value);
			Galleries.insert({
				title: title,
				createdAt: date,
				type: type,
				image_count: 0,
				private: priv,
        		password: password // current time
        	});
			if (type == "landscape") {
				Router.go('admin/'+type);
			}
			Router.go('admin/'+type+'s');
		}
	},
	"submit form#edit": function(event) {
		event.preventDefault();
		var title = event.target.title.value;
		if(title == '') {
			$('#message').fadeIn();
		}else {
			var parts = location.href.split('/');
			var id = parts.pop();
			var type = Galleries.findOne({_id: _id}).type;
			var priv = event.target.priv.checked;
			var date = new Date(event.target.createdAt.value);
			var password = event.target.password.value;
			Galleries.update(id, {
				$set: {title: title, private : priv, password : password, createdAt : date}
			});
			if (type == "landscape") {
				Router.go('admin/'+type);
			}
			Router.go('admin/'+type+'s');
		}
	},
	"click .private_checkbox": function(event) {
		var cbIsChecked = $('#private_pass').prop('disabled');
		$('#private_pass').prop('disabled', !cbIsChecked); 
	},
	"keypress input[name='title']" : function(event) {
		if (event.which === 13) {
			$('form').submit();
		}
	}


});
function confirm(callback) {
	$('#backdrop').fadeIn();
	$('#confirm').fadeIn()
	$('#backdrop, #confirm #cancel').click(function(){
		$('#backdrop').fadeOut();
		$('#confirm').fadeOut();
	});
	$("#confirm #delete").click(function(){
		callback();
		$('#backdrop').fadeOut();
		$('#confirm').fadeOut();
	});
}
Template.admin_gallery_row.events({
	"click td.delete": function () {
		var gallery = this;
		confirm(function(event){
			Galleries.remove(gallery._id);
		});
	},
	"click td.edit": function() {
		Router.go('/admin/edit-gallery/'+this._id);
	},
	"click a.goToGallery": function(event) {
		event.preventDefault();
		Router.go('/admin/view-gallery/' + this._id );
	}
});


/*-----------*/
/* IMAGES JS */
/*-----------*/
Template.admin_gallery.rendered = function () {
	var parts = location.href.split('/');
	var gallery_id = parts.pop();

	Session.set('gallery_id',gallery_id);
	var galleries =  Galleries.find({type: "landscape"}, {sort: {createdAt: -1}}).fetch();
	Session.set('isLandscape',false);
	for(var i = 0; i < galleries.length;i++){
		var gallery = galleries[i];

		if (gallery._id == Session.get('gallery_id')){
				// console.log('is landscape');
				Session.set('isLandscape',true);
			}
		}


	};
	Template.admin_gallery.helpers({
		imagesForGallery : function() {
			return GalleryImages.find({gallery_id: Session.get('gallery_id')},{sort: {createdAt: -1}});
		},
		gallery : function() {
			return Session.get('gallery_id');
		},
		isLandscape: function(){
			return Session.get('isLandscape');
			
		}
	});
	Template.new_image.helpers({
		slideshow : function(){
			var parts = location.href.split('/');
			var slideshow = parts.pop();
			if(slideshow == 'slideshow') return true;
			return false;
		},
		getCurrentStore : function() {
			return Session.get('current_slideshow_store');
		},
		isLandscapeUpload : function() {
			if(Session.get('current_slideshow_store') == 'landscape') return true;
			return false;
		},
		isPortraitUpload : function(){
			if(Session.get('current_slideshow_store') == 'portrait') return true;
			return false;
		}
	});
	Template.new_image.events({
		"click #back_gallery_button" : function() {
			var parts = location.href.split('/');
			var gallery_id = parts.pop();
			if (gallery_id == 'slideshow') Router.go("/admin/slideshow");
			else Router.go("/admin/view-gallery/"+gallery_id);
		},
		"change input.upload" : function() {
			$('form').submit();
		},
		"submit form": function(event) {
			event.preventDefault();
			var parts = location.href.split('/');
			var gallery_id = parts.pop();
			var files = event.target.files.files;
			var current_store = Session.get('current_slideshow_store');
			var title = '';
			for (var i = 0, ln = files.length; i < ln; i++) {
				var file = files[i];
				if (gallery_id == 'slideshow') {
					if(current_store == 'landscape')
						LandscapeSlideshow.insert(file);
					else
						PortraitSlideshow.insert(file);

				}else {
					var fileObj = Images.insert(file);
					title = fileObj.name();
					title = title.slice(0, -4);
					fileObj.name(fileObj._id);
					Images.update({_id: fileObj._id}, {$set: {'metadata.name': title}});

					GalleryImages.insert({
						gallery_id: gallery_id,
						image: fileObj,
						title: title,
						createdAt: new Date(),
					});
				}

			}
			if (gallery_id == 'slideshow') {
				Router.go("/admin/slideshow");
			}else {
				var current_image_count = Galleries.findOne({_id : gallery_id}).image_count;
				Galleries.update(gallery_id, {
					$set: {image_count: current_image_count+files.length}
				});
				Router.go("/admin/view-gallery/"+gallery_id);
			}
		}

	});
	Template.view_image.helpers({
		getImage : function(){
			var parts = location.href.split('/');
			var id = parts.pop();
			return Images.findOne({_id: id});
		}
	});
	Template.admin_image_row.helpers({
		"isUploaded" : function() {
			var image = Images.findOne({_id : this.image._id});
			if (image)
				return image.isUploaded();
		}
	});
	Template.admin_image_row.events({
		"click td.delete": function () {
			var image = this;
			confirm(function(event){
				Images.remove(image.image._id);
				GalleryImages.remove(image._id);
				var parts = location.href.split('/');
				var gallery_id = parts.pop();
				var current_image_count = Galleries.findOne({_id : gallery_id}).image_count;
				Galleries.update(gallery_id, {
					$set: {image_count: current_image_count-1}
				});
			});
			
		},
	});
	Template.admin_landscape_image_row.events({
		"click td.edit": function () {
			$('.overlay').fadeIn();
			$('.edit_container').fadeIn();
			$('.edit_container input').val(this.title);
			$('.edit_container input').attr('data-id', this._id);
		},
		"click td.delete": function () {
			var image = this;
			confirm(function(event){
				Images.remove(image.image._id);
				GalleryImages.remove(image._id);
				var parts = location.href.split('/');
				var gallery_id = parts.pop();
				var current_image_count = Galleries.findOne({_id : gallery_id}).image_count;
				Galleries.update(gallery_id, {
					$set: {image_count: current_image_count-1}
				});
			});
			
		}

	});
	Template.admin_landscape_image_row.helpers({
		"isUploaded" : function() {
			var image = GalleryImages.findOne({_id : this._id}).image;
			return image.isUploaded();
		},

	});

	Template.admin_gallery.events({
		"click .overlay" : function(){
			$('.overlay').fadeOut();
			$('.edit_container').fadeOut();
			$('.edit_container input').val('');
			$('.edit_container input').attr('data-id', '0');
		},
		"click .edit_container a" : function(){
			$('.overlay').fadeOut();
			$('.edit_container').fadeOut();
			var id = $('.edit_container input').attr('data-id');
			var title = $('.edit_container input').val();
			/* UPDATE FUNCTION HERE */
			GalleryImages.update({_id: id}, {$set: {title: title}});
			var image = GalleryImages.findOne({_id : id}).image;

			Images.update({_id: image._id}, {$set: {'metadata.name': title}});
			image = Images.findOne({_id : image._id});
			GalleryImages.update({_id: id}, {$set: {image: image}});
			

			/* END */
			$('.edit_container input').val('');
			$('.edit_container input').attr('data-id', '0');
		}
	});

	/* ######### */
	/* SLIDESHOW */
	/* ######### */

	Template.admin_slideshow.rendered = function () {
		var current_store = Session.get('current_slideshow_store');
		if(!current_store)
			Session.set('current_slideshow_store', 'landscape');
		else if(current_store == 'landscape') {
			$('a#landscape, a#portrait').removeClass('active');
			$('a#landscape').addClass('active');
		}
		else {
			$('a#landscape, a#portrait').removeClass('active');
			$('a#portrait').addClass('active');
		}
		$(function(){
			var TINY=TINY||{},T$=T$||function(i){return document.getElementById(i)},T$$$=T$$$||function(){return document.all?1:0};TINY.editor=function(){var c=[],offset=-30;c['bold']=[4,'Bold','a','bold'];c['italic']=[5,'Italic','a','italic'];c['underline']=[6,'Underline','a','underline'];c['strikethrough']=[7,'Strikethrough','a','strikethrough'];c['subscript']=[8,'Subscript','a','subscript'];c['superscript']=[9,'Superscript','a','superscript'];c['orderedlist']=[10,'Insert Ordered List','a','insertorderedlist'];c['unorderedlist']=[11,'Insert Unordered List','a','insertunorderedlist'];c['outdent']=[12,'Outdent','a','outdent'];c['indent']=[13,'Indent','a','indent'];c['leftalign']=[14,'Left Align','a','justifyleft'];c['centeralign']=[15,'Center Align','a','justifycenter'];c['rightalign']=[16,'Right Align','a','justifyright'];c['blockjustify']=[17,'Block Justify','a','justifyfull'];c['undo']=[18,'Undo','a','undo'];c['redo']=[19,'Redo','a','redo'];c['image']=[20,'Insert Image','i','insertimage','Enter Image URL:','http://'];c['hr']=[21,'Insert Horizontal Rule','a','inserthorizontalrule'];c['link']=[22,'Insert Hyperlink','i','createlink','Enter URL:','http://'];c['unlink']=[23,'Remove Hyperlink','a','unlink'];c['unformat']=[24,'Remove Formatting','a','removeformat'];c['print']=[25,'Print','a','print'];function edit(n,obj){this.n=n;window[n]=this;this.t=T$(obj.id);this.obj=obj;this.xhtml=obj.xhtml;var p=document.createElement('div'),w=document.createElement('div'),h=document.createElement('div'),l=obj.controls.length,i=0;this.i=document.createElement('iframe');this.i.width=obj.width||'500';this.i.height=obj.height||'250';this.ie=T$$$();h.className=obj.rowclass||'tinyeditor-header';p.className=obj.cssclass||'tinyeditor';p.style.width=this.i.width+'px';p.appendChild(h);for(i;i<l;i++){var id=obj.controls[i];if(id=='n'){h=document.createElement('div');h.className=obj.rowclass||'tinyeditor-header';p.appendChild(h)}else if(id=='|'){var d=document.createElement('div');d.className=obj.dividerclass||'tinyeditor-divider';h.appendChild(d)}else if(id=='font'){var sel=document.createElement('select'),fonts=obj.fonts||['Verdana','Arial','Georgia'],fl=fonts.length,x=0;sel.className='tinyeditor-font';sel.onchange=new Function(this.n+'.ddaction(this, "fontname")');sel.options[0]=new Option('Font','');for(x;x<fl;x++){var font=fonts[x];sel.options[x+1]=new Option(font,font)}h.appendChild(sel)}else if(id=='size'){var sel=document.createElement('select'),sizes=obj.sizes||[1,2,3,4,5,6,7],sl=sizes.length,x=0;sel.className='tinyeditor-size';sel.onchange=new Function(this.n+'.ddaction(this, "fontsize")');for(x;x<sl;x++){var size=sizes[x];sel.options[x]=new Option(size,size)}h.appendChild(sel)}else if(id=='style'){var sel=document.createElement('select'),styles=obj.styles||[['Style',''],['Paragraph','<p>'],['Header 1','<h1>'],['Header 2','<h2>'],['Header 3','<h3>'],['Header 4','<h4>'],['Header 5','<h5>'],['Header 6','<h6>']],sl=styles.length,x=0;sel.className='tinyeditor-style';sel.onchange=new Function(this.n+'.ddaction(this, "formatblock")');for(x;x<sl;x++){var style=styles[x];sel.options[x]=new Option(style[0],style[1])}h.appendChild(sel)}else if(c[id]){var div=document.createElement('div'),x=c[id],func=x[2],ex,pos=x[0]*offset;div.className=obj.controlclass;div.unselectable='on';div.style.backgroundPosition='0px '+pos+'px';div.title=x[1];ex=func=='a'?'.action("'+x[3]+'", 0, '+(x[4]||0)+')':'.insert("'+x[4]+'", "'+x[5]+'", "'+x[3]+'")';div.onmousedown=new Function(this.n+(id=='print'?'.print()':ex));div.onmouseover=new Function(this.n+'.hover(this, '+pos+', 1)');div.onmouseout=new Function(this.n+'.hover(this, '+pos+', 0)');h.appendChild(div);if(this.ie){div.unselectable='on'}}}this.t.parentNode.insertBefore(p,this.t);this.t.style.width=this.i.width+'px';w.appendChild(this.t);w.appendChild(this.i);p.appendChild(w);this.t.style.display='none';if(obj.footer){var f=document.createElement('div');f.className=obj.footerclass||'tinyeditor-footer';if(obj.toggle){var to=obj.toggle,ts=document.createElement('div');ts.className=to.cssclass||'toggle';ts.innerHTML=obj.toggletext||'source';ts.onclick=new Function(this.n+'.toggle(0, this);return false');f.appendChild(ts)}if(obj.resize){var ro=obj.resize,rs=document.createElement('div');rs.className=ro.cssclass||'resize';rs.onmousedown=new Function('event',this.n+'.resize(event);return false');rs.onselectstart=function(){return false};f.appendChild(rs)}p.appendChild(f)}this.e=this.i.contentWindow.document;this.e.open();var m='<html><head>',bodyid=obj.bodyid?" id=\""+obj.bodyid+"\"":"";if(obj.cssfile){m+='<link rel="stylesheet" href="'+obj.cssfile+'" />'}if(obj.css){m+='<style type="text/css">'+obj.css+'</style>'}m+='</head><body'+bodyid+' contenteditable="true">'+(obj.content||this.t.value);m+='</body></html>';this.e.write(m);this.e.close();this.e.designMode='On';this.d=1;if(this.xhtml){try{this.e.execCommand("styleWithCSS",0,0)}catch(e){try{this.e.execCommand("useCSS",0,1)}catch(e){}}}};edit.prototype.print=function(){this.i.contentWindow.print()};edit.prototype.hover=function(div,pos,dir){this.getSelection();div.style.backgroundPosition=(dir?'34px ':'0px ')+(pos)+'px'};edit.prototype.getSelection=function(){if(this.ie&&this.e.getSelection){this.sel=this.e.getSelection();if(this.sel.getRangeAt&&this.sel.rangeCount){this.range=this.sel.getRangeAt(0)}}};edit.prototype.restoreSelection=function(){if(this.range&&this.ie){if(this.e.getSelection){this.sel=this.e.getSelection();this.sel.removeAllRanges();this.sel.addRange(this.range)}}};edit.prototype.ddaction=function(dd,a){var i=dd.selectedIndex,v=dd.options[i].value;this.action(a,v)};edit.prototype.action=function(cmd,val,ie){if(ie&&!this.ie){alert('Your browser does not support this function.')}else{this.restoreSelection();this.e.execCommand(cmd,0,val||null)}};edit.prototype.insert=function(pro,msg,cmd){var val=prompt(pro,msg);if(val!=null&&val!=''){this.e.execCommand(cmd,0,val)}};edit.prototype.setfont=function(){this.restoreSelection();execCommand('formatblock',0,hType)};edit.prototype.resize=function(e){if(this.mv){this.freeze()}this.i.bcs=TINY.cursor.top(e);this.mv=new Function('event',this.n+'.move(event)');this.sr=new Function(this.n+'.freeze()');if(this.ie){document.attachEvent('onmousemove',this.mv);document.attachEvent('onmouseup',this.sr)}else{document.addEventListener('mousemove',this.mv,1);document.addEventListener('mouseup',this.sr,1)}};edit.prototype.move=function(e){var pos=TINY.cursor.top(e);this.i.height=parseInt(this.i.height)+pos-this.i.bcs;this.i.bcs=pos};edit.prototype.freeze=function(){if(this.ie){document.detachEvent('onmousemove',this.mv);document.detachEvent('onmouseup',this.sr)}else{document.removeEventListener('mousemove',this.mv,1);document.removeEventListener('mouseup',this.sr,1)}};edit.prototype.toggle=function(post,div){if(!this.d){var v=this.t.value;if(div){div.innerHTML=this.obj.toggletext||'source'}if(this.xhtml&&!this.ie){v=v.replace(/<strong>(.*)<\/strong>/gi,'<span style="font-weight:bold;">$1</span>');v=v.replace(/<em>(.*)<\/em>/gi,'<span style="font-weight:italic;">$1</span>')}this.e.body.innerHTML=v;this.t.style.display='none';this.i.style.display='block';this.d=1}else{var v=this.e.body.innerHTML;if(this.xhtml){v=v.replace(/<span class="apple-style-span">(.*)<\/span>/gi,'$1');v=v.replace(/ class="apple-style-span"/gi,'');v=v.replace(/<span style="">/gi,'');v=v.replace(/<br>/gi,'<br />');v=v.replace(/<br ?\/?>$/gi,'');v=v.replace(/^<br ?\/?>/gi,'');v=v.replace(/(<img [^>]+[^\/])>/gi,'$1 />');v=v.replace(/<b\b[^>]*>(.*?)<\/b[^>]*>/gi,'<strong>$1</strong>');v=v.replace(/<i\b[^>]*>(.*?)<\/i[^>]*>/gi,'<em>$1</em>');v=v.replace(/<u\b[^>]*>(.*?)<\/u[^>]*>/gi,'<span style="text-decoration:underline">$1</span>');v=v.replace(/<(b|strong|em|i|u) style="font-weight:normal;?">(.*)<\/(b|strong|em|i|u)>/gi,'$2');v=v.replace(/<(b|strong|em|i|u) style="(.*)">(.*)<\/(b|strong|em|i|u)>/gi,'<span style="$2"><$4>$3</$4></span>');v=v.replace(/<span style="font-weight:normal;?">(.*)<\/span>/gi,'$1');v=v.replace(/<span style="font-weight:bold;?">(.*)<\/span>/gi,'<strong>$1</strong>');v=v.replace(/<span style="font-style:italic;?">(.*)<\/span>/gi,'<em>$1</em>');v=v.replace(/<span style="font-weight:bold;?">(.*)<\/span>|<b\b[^>]*>(.*?)<\/b[^>]*>/gi,'<strong>$1</strong>')}if(div){div.innerHTML=this.obj.toggletext||'wysiwyg'}this.t.value=v;if(!post){this.t.style.height=this.i.height+'px';this.i.style.display='none';this.t.style.display='block';this.d=0}}};edit.prototype.post=function(){if(this.d){this.toggle(1)}};return{edit:edit}}();TINY.cursor=function(){return{top:function(e){return T$$$()?window.event.clientY+document.documentElement.scrollTop+document.body.scrollTop:e.clientY+window.scrollY}}}();
			new TINY.editor.edit('editor',{			
				id:'intro-content', 
				cssclass:'tinyeditor', 
				controlclass:'tinyeditor-control', 
				rowclass:'tinyeditor-header',
				dividerclass:'tinyeditor-divider',
				controls:['bold', 'italic', 'underline', 'strikethrough', '|', 'subscript', 'superscript', '|', 'orderedlist', 'unorderedlist', '|' ,'outdent' ,'indent', '|', 'leftalign', 'centeralign', 'rightalign', 'blockjustify', '|', 'unformat', '|', 'undo', 'redo', 'n', 'style', '|', 'image', 'hr', 'link', 'unlink', '|', 'print'],
				css:'body{background-color:#fff;}', 
				bodyid:'editor', 
			});
		});
};
Template.admin_slideshow.helpers({
	images : function() {
		var current_store = Session.get('current_slideshow_store');
		if (current_store == 'landscape')
			return LandscapeSlideshow.find();
		return PortraitSlideshow.find();
	},
	intro : function() {
		// console.log(Dictionary.find({_id : 'intro'}).fetch());
		return Dictionary.find({_id : 'intro'}).fetch()[0].content;
	}
});
Template.admin_slideshow.events({
	"click a#landscape": function(event) {
		event.preventDefault();
		Session.set('current_slideshow_store', 'landscape');
		$('a#landscape, a#portrait, a#intro').removeClass('active');
		$('a#landscape').addClass('active');
		$('.intro_container').hide();
		$('.gallery_container').fadeIn();
	},
	"click a#portrait": function(event) {
		event.preventDefault();
		Session.set('current_slideshow_store', 'portrait');
		$('a#landscape, a#portrait, a#intro').removeClass('active');
		$('a#portrait').addClass('active');
		$('.intro_container').hide();
		$('.gallery_container').fadeIn();
	},
	"click a#intro": function(event) {
		event.preventDefault();
			// Session.set('current_slideshow_store', 'portrait');
			$('a#landscape, a#portrait, a#intro').removeClass('active');
			$('a#intro').addClass('active');
			$('.gallery_container').hide();
			$('.intro_container').fadeIn();
		},
		"submit .intro_container form" : function(event) {
			event.preventDefault();
			var content = event.target.content.value;
			// console.log(content);
			// Dictionary.insert({
			// 	_id: 'intro',
			// 	content : content
			// });
			Dictionary.update({_id : 'intro'}, {$set: {content: content}} );

			$('p.success').fadeIn(500, function(){
				$(this).delay(1500).fadeOut();
			});
		}
	});
Template.admin_slideshow_row.helpers({
	"isUploaded" : function() {
		var current_store = Session.get('current_slideshow_store');
		if (current_store == 'landscape')
			var image = LandscapeSlideshow.findOne({_id : this._id});
		else {
			var image = PortraitSlideshow.findOne({_id : this._id});
		}
		if (image)
			return image.isUploaded();
	},
	getCurrentStore : function() {
		return Session.get('current_slideshow_store');
	},
});
Template.admin_slideshow_row.events({
	"click td.delete": function () {
		var image = this;
		confirm(function(event){
			var current_store = Session.get('current_slideshow_store');
			if (current_store == 'landscape')
				LandscapeSlideshow.remove(image._id);
			PortraitSlideshow.remove(image._id);
		});

	},
});
Template.view_slideshow_image.helpers({
	getImage : function(){
		var parts = location.href.split('/');
		var id = parts.pop();
		var image = LandscapeSlideshow.findOne({_id: id});
		if(image)
			return image;
		else
			return PortraitSlideshow.findOne({_id: id});
	},
	isLandscapeImage : function (){
		var parts = location.href.split('/');
		var id = parts.pop();
		var image = LandscapeSlideshow.findOne({_id: id});
		if(image)
			return true;
		else
			return false;
	}
});

}