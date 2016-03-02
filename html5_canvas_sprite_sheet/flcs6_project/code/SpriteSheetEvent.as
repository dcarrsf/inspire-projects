package code
{
	import flash.events.Event;

	/****************************
	 * SpriteSheetEvent class
	 * 
	 * @langversion ActionScript 3.0
	 * @playerversion Flash 10.0.0
	 */
	public class SpriteSheetEvent extends Event
	{
		//***********************
		// Properties:
		
		public static const READY:String = "ready";
		public static const SPRITE_SHEET_LOADED:String = "spriteSheetLoaded";
		public static const SPRITE_SHEET_INIT:String = "spriteSheetInit";
		
		//***********************
		// Properties:
		
		public var data:Object;
		
		//***********************
		// Constructor:
		
		public function SpriteSheetEvent(type:String, o:Object=null):void
		{
			super(type);
			
			// Cache data value
			data = o;
		}
		
		//***********************
		// Overrides:
		
		public override function clone():Event 
		{
			return new SpriteSheetEvent(this.type, data);
		}
		
		public override function toString():String 
		{
			return formatToString("[SpriteSheetEvent]");
		}
	}
}