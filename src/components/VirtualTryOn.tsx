import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Upload, 
  Heart, 
  ShoppingCart, 
  Share2, 
  Filter,
  X
} from "lucide-react";

interface WigStyle {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  colors: string[];
}

const wigStyles: WigStyle[] = [
  {
    id: 'bob-classic',
    name: 'Classic Bob',
    category: 'Bob',
    price: 299,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Timeless bob with clean lines',
    colors: ['Natural Black', 'Dark Brown', 'Honey Blonde']
  },
  {
    id: 'bob-angled',
    name: 'Angled Bob',
    category: 'Bob',
    price: 329,
    image: 'https://images.pexels.com/photos/1624229/pexels-photo-1624229.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Modern angled cut with movement',
    colors: ['Auburn', 'Chocolate Brown', 'Platinum']
  },
  {
    id: 'short-pixie',
    name: 'Textured Pixie',
    category: 'Short',
    price: 249,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Edgy pixie with texture',
    colors: ['Salt & Pepper', 'Natural Black', 'Caramel']
  },
  {
    id: 'medium-layers',
    name: 'Layered Medium',
    category: 'Medium',
    price: 399,
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Versatile medium length with layers',
    colors: ['Dark Brown', 'Highlight Blend', 'Burgundy']
  },
  {
    id: 'long-waves',
    name: 'Long Beach Waves',
    category: 'Long',
    price: 499,
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Flowing waves with natural movement',
    colors: ['Honey Blonde', 'Natural Brown', 'Copper Red']
  },
  {
    id: 'long-straight',
    name: 'Sleek Long',
    category: 'Long',
    price: 529,
    image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Ultra-sleek long style',
    colors: ['Jet Black', 'Espresso', 'Golden Blonde']
  }
];

const categories = ['All', 'Bob', 'Short', 'Medium', 'Long'];

const VirtualTryOn = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedWig, setSelectedWig] = useState<WigStyle | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [savedLooks, setSavedLooks] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<string[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const filteredWigs = selectedCategory === 'All' 
    ? wigStyles 
    : wigStyles.filter(wig => wig.category === selectedCategory);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setShowImagePreview(true);
        setCameraActive(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 400, height: 400 } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
        setUploadedImage(null);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please upload a photo instead.');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      setCameraActive(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        setUploadedImage(dataURL);
        setShowImagePreview(true);
        stopCamera();
      }
    }
  };

  const proceedToTryOn = () => {
    setShowImagePreview(false);
  };

  const retakePhoto = () => {
    setUploadedImage(null);
    setShowImagePreview(false);
  };

  const toggleSavedLook = (wigId: string) => {
    setSavedLooks(prev => 
      prev.includes(wigId) 
        ? prev.filter(id => id !== wigId)
        : [...prev, wigId]
    );
  };

  const addToCart = (wigId: string) => {
    setCartItems(prev => 
      prev.includes(wigId) 
        ? prev 
        : [...prev, wigId]
    );
  };

  const shareLook = () => {
    if (navigator.share && selectedWig) {
      navigator.share({
        title: `Check out this ${selectedWig.name} style!`,
        text: `I'm trying on the ${selectedWig.name} from Mane Girl Beauty`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Virtual Try-On Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how different wig styles look on you with our advanced virtual try-on technology. 
            Upload a photo or use your camera to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Try-On Area */}
          <div className="space-y-4">
            <Card className="aspect-square">
              <CardContent className="p-6 h-full flex items-center justify-center">
                {!uploadedImage && !cameraActive && (
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
                      <Camera className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground">Upload a photo or use your camera to start trying on styles</p>
                    <div className="flex flex-col gap-2">
                      <Button onClick={startCamera} variant="outline" className="w-full">
                        <Camera className="h-4 w-4 mr-2" />
                        Use Camera
                      </Button>
                      <Button 
                        onClick={() => fileInputRef.current?.click()} 
                        variant="outline" 
                        className="w-full"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Photo
                      </Button>
                    </div>
                  </div>
                )}

                {uploadedImage && showImagePreview && (
                  <div className="text-center space-y-4">
                    <img
                      src={uploadedImage}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-lg mx-auto"
                    />
                    <p className="text-muted-foreground">How does this photo look?</p>
                    <div className="flex flex-col gap-2">
                      <Button onClick={proceedToTryOn} className="w-full">
                        Looks good! Start trying on styles
                      </Button>
                      <Button onClick={retakePhoto} variant="outline" className="w-full">
                        Retake photo
                      </Button>
                    </div>
                  </div>
                )}

                {cameraActive && (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      <Button onClick={capturePhoto} size="sm">
                        Capture
                      </Button>
                      <Button onClick={stopCamera} variant="outline" size="sm">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {uploadedImage && !showImagePreview && (
                  <div className="relative w-full h-full">
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {selectedWig && (
                      <div className="absolute top-4 right-4 bg-background/90 p-2 rounded-lg">
                        <p className="text-sm font-medium">{selectedWig.name}</p>
                        <p className="text-xs text-muted-foreground">${selectedWig.price}</p>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {selectedWig && (
                        <>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => toggleSavedLook(selectedWig.id)}
                            className={savedLooks.includes(selectedWig.id) ? 'bg-red-50 border-red-200' : ''}
                          >
                            <Heart className={`h-4 w-4 ${savedLooks.includes(selectedWig.id) ? 'fill-red-500 text-red-500' : ''}`} />
                          </Button>
                          <Button size="sm" variant="outline" onClick={shareLook}>
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            onClick={() => addToCart(selectedWig.id)}
                            disabled={cartItems.includes(selectedWig.id)}
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            {cartItems.includes(selectedWig.id) ? 'Added' : 'Add to Cart'}
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />

            {!uploadedImage && !cameraActive && (
              <div className="text-xs text-muted-foreground text-center">
                For best results, use a clear, front-facing photo with good lighting
              </div>
            )}
          </div>

          {/* Style Selection */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Choose a Style</h3>
              <Button variant="ghost" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Wig Grid */}
            <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              {filteredWigs.map(wig => (
                <Card 
                  key={wig.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedWig?.id === wig.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedWig(wig)}
                >
                  <CardContent className="p-3">
                    <img
                      src={wig.image}
                      alt={wig.name}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm">{wig.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {wig.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{wig.description}</p>
                      <p className="font-semibold text-sm">${wig.price}</p>
                      <div className="flex gap-1">
                        {wig.colors.slice(0, 3).map((color, index) => (
                          <div
                            key={index}
                            className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 border border-gray-300"
                            title={color}
                          />
                        ))}
                        {wig.colors.length > 3 && (
                          <span className="text-xs text-muted-foreground ml-1">
                            +{wig.colors.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Book Custom Wig Consultation
            </Button>
            <Button variant="outline" size="lg">
              Browse All Styles
            </Button>
          </div>
          
          {savedLooks.length > 0 && (
            <p className="text-sm text-muted-foreground">
              You have {savedLooks.length} saved look{savedLooks.length === 1 ? '' : 's'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;