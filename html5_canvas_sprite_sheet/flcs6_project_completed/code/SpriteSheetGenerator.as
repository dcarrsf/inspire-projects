package code
{
	import flash.display.Bitmap;
	import flash.display.Loader;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	
	import starling.core.Starling;
	import starling.display.MovieClip;
	import starling.display.Sprite;
	import starling.events.Event;
	import starling.textures.Texture;
	import starling.textures.TextureAtlas;
	
	/****************************
	 * SpriteSheetGenerator class
	 * 
	 * @langversion ActionScript 3.0
	 * @playerversion Flash 10.0.0
	 */
	public class SpriteSheetGenerator extends Sprite
	{
		//***********************
		// Properties:
		
		protected var _fps:uint = 30;
		protected var _spriteSheetInstances:Object = new Object();
		protected var _spriteSheetLoaders:Object = new Object();
		
		//***********************
		// Constructor:
		
		public function SpriteSheetGenerator(){
			//...
		}
		
		//***********************
		// Events:

		protected function onSpriteSheetLoaded( event:SpriteSheetEvent ):void
		{
			event.currentTarget.removeEventListener(SpriteSheetEvent.SPRITE_SHEET_LOADED, onSpriteSheetLoaded);
			
			// Show animation
			showSpriteSheet( event.currentTarget as SpriteSheetInstance );
		}
		
		//***********************
		// Methods:
		
		public function addSpriteSheet( ssname:String, xmlpath:String, pngpath:String, x:Number, y:Number ):SpriteSheetInstance
		{
			if( _spriteSheetInstances[ssname] == null )
			{
				var ssloader:SpriteSheetLoader;
				
				// Get loader
				if( _spriteSheetLoaders[ssname] == null )
				{
					// Create loader and load assets
					ssloader = new SpriteSheetLoader();
					ssloader.load(xmlpath, pngpath);
					
					// Cache loader to share across instances
					_spriteSheetLoaders[ssname] = ssloader;
				}
				ssloader = _spriteSheetLoaders[ssname];
				
				// Create sprite sheet instance
				var ssinst:SpriteSheetInstance = new SpriteSheetInstance();
				ssinst.id = ssname;
				ssinst.loader = ssloader;
				ssinst.xPosition = x;
				ssinst.yPosition = y;
				
				// Cache instance
				_spriteSheetInstances[ssname] = ssinst;
				
				// Draw outselves or wait until we're loaded
				if( ssloader.loaded ){
					showSpriteSheet(ssinst);
				}else{
					ssloader.addEventListener(SpriteSheetEvent.SPRITE_SHEET_LOADED, ssinst.onSpriteSheetLoaded);
					ssinst.addEventListener(SpriteSheetEvent.SPRITE_SHEET_LOADED, onSpriteSheetLoaded);
				}
				return ssinst;
			}
			return null;
		}
		
		public function duplicateSpriteSheet( ssname:String, newssname:String, x:Number, y:Number ):SpriteSheetInstance
		{
			if( _spriteSheetInstances[ssname] != null )
			{
				// Create sprite sheet instance
				var copyinst:SpriteSheetInstance = _spriteSheetInstances[ssname];
				var ssinst:SpriteSheetInstance = new SpriteSheetInstance();
				ssinst.id = newssname;
				ssinst.loader = copyinst.loader;
				ssinst.xPosition = x;
				ssinst.yPosition = y;
				
				// Cache instance
				_spriteSheetInstances[newssname] = ssinst;
				
				// Draw outselves or wait until we're loaded
				if( copyinst.loader.loaded ){
					showSpriteSheet(ssinst);
				}else{
					copyinst.loader.addEventListener(SpriteSheetEvent.SPRITE_SHEET_LOADED, ssinst.onSpriteSheetLoaded);
					ssinst.addEventListener(SpriteSheetEvent.SPRITE_SHEET_LOADED, onSpriteSheetLoaded);
				}
				return ssinst;
			}
			return null;
		}
		
		public function getSpriteSheet( ssname:String ):SpriteSheetInstance
		{
			return _spriteSheetInstances[ssname];
		}
		
		public function showSpriteSheet( ssinst:SpriteSheetInstance ):void
		{
			// Create texture atlas
			if( ssinst.inited == false ){
				ssinst.textureAtlas = new TextureAtlas(Texture.fromBitmap(ssinst.loader.png), ssinst.loader.xml);
				
				// Create new display clip
				var mc:MovieClip = new MovieClip(ssinst.textureAtlas.getTextures(ssinst.loader.baseName), _fps);
				mc.x = ssinst.xPosition;
				mc.y = ssinst.yPosition;
				addChild(mc);
				
				// Start the animation with the Juggler
				Starling.juggler.add(mc);
				
				// Cache movie clip
				ssinst.movieClip = mc;
				ssinst.inited = true;
			}
		}
		
		//***********************
		// Public Properties:
		
		//---------------
		// fps
		
		public function set fps( value:uint ):void
		{
			_fps = value;
		}
		
		public function get fps():uint
		{
			return _fps;
		}
	}
}