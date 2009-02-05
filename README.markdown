jquery.rack.js
==============

A interface like a iTunes' Grid View.

- [Sample](http://codefairy.org/misc/jquery.rack.js/sample/)

## Usage
Replace the &lt;ul&gt; list to grid view interface:

	<ul id="rack">
		<li><a href="1"><img src="1.png"/></a></li>
		<li><a href="2"><img src="2.png"/></a></li>
		<li><a href="3"><img src="3.png"/></a></li>
	</ul>
	
	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript" src="jquery.rack.js"></script>
	<script type="text/javascript">
	$('#rack').rack();
	</script>

### Requirements
- jQuery >= 1.2.3

## Changes
### 0.2
- Rewrite
  - Simply
  - Faster on IE
- Add Test (using [QUnit](http://docs.jquery.com/QUnit))

### 0.1
- Initial release

## Authors
- [yksk](http://twitter.com/yksk) <yoko@carbonfairy.org>

## License
The MIT License

Copyright (c) 2008- yksk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## See
- <http://carbonfairy.org/note/coding/081211-jquery-rack.html>
