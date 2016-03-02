package code
{
	import flash.display.Bitmap;
	import flash.display.Loader;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	
	/****************************
	 * SpriteSheetLoader class
	 * 
	 * @langversion ActionScript 3.0
	 * @playerversion Flash 10.0.0
	 */
	public class SpriteSheetLoader extends EventDispatcher
	{
		//***********************
		// Properties:
		
		protected var _xml:XML;
		protected var _xmlPath:String;
		protected var _xmlLoader:URLLoader;
		
		protected var _png:Bitmap;
		protected var _pngPath:String;
		protected var _pngLoader:Loader;
		
		protected var _baseName:String = "";
		protected var _loaded:Boolean = false;

		//***********************
		// Constructor:
		
		public function SpriteSheetLoader(){
			//...
		}
		
		//***********************
		// Events:
		
		protected function onXMLLoaded( event:Event ):void
		{
			// Cache xml
			_xml = new XML(_xmlLoader.data);
			
			// Get base name
			var bnode:XML = _xml.children()[0];
			if( bnode ){
				_baseName = bnode.@name;
				_baseName = _baseName.substring(0, _baseName.indexOf("0"));
			}
			// Create png loader...
			if( _pngLoader == null ){
				_pngLoader = new Loader();
				_pngLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, onPngLoaded);
			}
			// Load png...
			_pngLoader.load(new URLRequest(_pngPath));
		}

		protected function onPngLoaded( event:Event ):void
		{
			// Cache bitmap
			_png = _pngLoader.content as Bitmap;
			
			// Relay event
			_loaded = true;
			dispatchEvent(new SpriteSheetEvent(SpriteSheetEvent.SPRITE_SHEET_LOADED));
		}
		
		//***********************
		// Methods:
		
		public function load( xmlpath:String, pngpath:String ):void
		{
			_loaded = false;
			_xmlPath = xmlpath;
			_pngPath = pngpath;
			
			// Create xml loader
			if( _xmlLoader == null ){
				_xmlLoader = new URLLoader();
				_xmlLoader.addEventListener(Event.COMPLETE, onXMLLoaded);
			}
			// Load xml...
			_xmlLoader.load(new URLRequest(_xmlPath));
		}
		
		//***********************
		// Public Properties:
		
		public function get baseName():String
		{
			return _baseName;
		}
		
		public function get loaded():Boolean
		{
			return _loaded;
		}
		
		public function get png():Bitmap
		{
			return _png;
		}
		
		public function get pngPath():String
		{
			return _pngPath;
		}
		
		public function get xml():XML
		{
			return _xml;
		}
		
		public function get xmlPath():String
		{
			return _xmlPath;
		}
	}
}