import DescAccordian from "./DescAccordian";
import Accordian from "./DescAccordian";
import ImageSlider from "./ImageSlider";
import SpecTable from "./SpecTable";
function ProductPage() {
  const data = {
    _id: {
      $oid: "666b5caf3fd8ec8263280cac",
    },
    type: "",
    category: "Mobiles",
    brand: "Redmi",
    title: "Motorola g04s (Satin Blue, 64 GB)",
    link: "https://www.flipkart.com/motorola-g04s-satin-blue-64-gb/p/itma899ac4728c8e?pid=MOBHY9PQM9H8HMEN&lid=LSTMOBHY9PQM9H8HMENQJT1JU&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=4db43552-0be9-44b8-9f24-61062be00491.MOBHY9PQM9H8HMEN.SEARCH&ppt=None&ppn=None&ssid=mnwrc0qm680000001718312111240",
    price: "₹6,999",
    rating: "4.3",
    desc_short: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
      "16.76 cm (6.6 inch) HD+ Display",
      "50MP Rear Camera | 5MP Front Camera",
      "5000 mAh Battery",
      "T606 Processor",
      "1 Year on Handset and 6 Months on Accessories",
    ],
    cover_img:
      "https://rukminim2.flixcart.com/image/3000/3000/xif0q/mobile/z/k/4/g04s-pb360002in-motorola-original-imahfc48wgbttfkk.jpeg?q=100",
    img_list: [
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/z/k/4/g04s-pb360002in-motorola-original-imahfc48wgbttfkk.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/f/t/4/g04s-pb360002in-motorola-original-imahfc488gtsbe8j.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/t/9/d/g04s-pb360002in-motorola-original-imahfc48jeyvvwms.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/t/g/b/-original-imahfdedwxbda6pc.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/x/x/t/g04s-pb360002in-motorola-original-imahfc486kvywegg.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/h/s/6/g04-pb130012in-motorola-original-imagy3tf9zj8wbhv.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/6/f/x/g04-pb130012in-motorola-original-imagy3tf4vfqbch7.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/a/r/7/g04-pb130012in-motorola-original-imagy3tfnb72vzvx.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/1/i/0/g04-pb130012in-motorola-original-imagy3tfebehykkt.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/z/1/7/g04s-pb360002in-motorola-original-imahfc48pkcgqwg3.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/4/g/f/g04s-pb360002in-motorola-original-imahfc48vsc3t4yg.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/l/o/i/g04s-pb360002in-motorola-original-imahfc48s84nryyk.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/f/y/w/g04s-pb360002in-motorola-original-imahfc48xdd9rs8p.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/z/y/e/g04-pb130010in-motorola-original-imagy3tedarkqvgh.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/w/0/j/g04-pb130010in-motorola-original-imagy3te9m6dhnwq.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/2/h/y/g04s-pb360000in-motorola-original-imahfc486makvwnp.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/4/4/b/g04-pb130010in-motorola-original-imagy3tebcqsq7cv.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/f/n/e/g04-pb130010in-motorola-original-imagy3teydytmzp8.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/1/d/g/g04-pb130010in-motorola-original-imagy3te3zbcpxzp.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/2/m/i/g04-pb130010in-motorola-original-imagy3tesx3aymmw.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/7/b/8/g04-pb130010in-motorola-original-imagy3teveb5jfzh.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/j/p/g/g04-pb130010in-motorola-original-imagy3texngau8ah.jpeg?q=100&crop=false",
      "https://rukminim2.flixcart.com/image/1000/1000/xif0q/mobile/i/h/b/g04-pb130010in-motorola-original-imagy3terv5xgzaq.jpeg?q=100&crop=false",
    ],
    desc_long: [
      {
        title: "Picture Perfect 50 MP Main Camera",
        discription:
          "Capture every moment effortlessly with the fast-focusing 50 MP Primary camera of the moto g04s. This camera delivers extremely sharp photos instantly. Elevate your photography with smart features such as HDR, Night Vision, and Portrait mode, ensuring effortlessly professionally styled shots. Experience enhanced image quality, refining colour, saturation, brightness, and contrast for picture-perfect memories. It also allows users to get social media-ready selfies using its 5 MP front camera.",
      },
      {
        title: "Premium Design",
        discription:
          "The moto g04s is crafted for stunning aesthetics and is sleek, slim, and stylish. With its premium materials and exquisite details, there's plenty to adore. Moreover, it features a high-quality matte finish on the back of the phone and a featherlight design that looks as good as it feels. It is lightweight, weighing just 178 g, and extremely slim at just 7.99 mm. You can effortlessly access your phone with a quick fingerprint scan or a simple glance into the camera.",
      },
      {
        title: "Vibrant and Durable Display",
        discription:
          "Dive into an unparalleled entertainment experience with the Moto g04s, featuring a 90 Hz fast-refreshing, 16.66 cm (6.6) punch-hole display. Enhanced with Gorilla Glass 3, it ensures superior durability. The notch-less screen design offers more immersive viewing with smoother visuals and fewer interruptions. Whether day or night, the High Brightness and Night Light modes guarantee clear and comfortable viewing, making every image and video come alive.",
      },
      {
        title: "Fast Performance with UNISOC T606",
        discription:
          "Elevate your multitasking, gaming, and overall performance with the UNISOC T606 chipset in the moto g04s. Experience seamless power, whether you're juggling tasks or diving into your favorite games. Unlock advanced AI photo capabilities and elevate your mobile experience to new heights.",
      },
      {
        title: "Massive 5000 mAh Battery",
        discription:
          "The incredible 5000 mAh battery in the moto g04s ensures extended sessions of music playback, lengthy video chats with friends, and uninterrupted binge-watching and sets aside all concerns about battery life. Enjoy 102 hours of music playback, 22 hours of talk time, 20 hours of video playback, and 17 hours of social media use. You can swiftly recharge and return to what truly matters with the rapid charger.",
      },
      {
        title: "Android 14",
        discription:
          "Personalise, secure, and streamline your mobile experience with the advanced Android 14. This brings a user-centric approach to the forefront. Android 14 offers you uniqueness, enhanced privacy, accessibility, and insights into your app usage. With strengthened security and seamless device interaction, Android 14 prioritises your well-being and provides a personalised, out-of-the-box experience that caters to your individual needs.",
      },
      {
        title: "Dolby Atmos",
        discription:
          "Unleash the power of Dolby Atmos for an immersive audio experience! Whether you're using headphones or enjoying content through the built-in speakers, re-discover your favorite shows, movies, and music with exceptional depth, crystal-clear clarity, and attention to detail. Elevate your entertainment game and get ready to be blown away!",
      },
      {
        title: "Powerful Performance",
        discription:
          "Experience Faster Performance with moto g04s 4 GB RAM and 64 GB Storage! Feel the lightning-fast response to your touch, taps, and swipes, courtesy of the 4 GB of internal RAM. Forget about storage concerns with a generous 64 GB of UFS2.2 storage and LPDDR4x memory, ensuring ample space for photos, movies, music, and switching between the apps. Dive into a seamless and high-speed digital experience with moto g04s.",
      },
      {
        title: "RAM Boost",
        discription:
          "Say yes to uncompromised performance with up to 8 GB of RAM with RAM boost. Activated by default, RAM Boost temporarily transforms storage into virtual RAM, seamlessly adapting to your phone's demands. Be it swiftly launching your apps or challenging your phone's multitasking capabilities, this phone is up for it all. Thanks to its additional 4 GB (as applicable) of extra RAM is automatically added, during intensive tasks.",
      },
      {
        title: "Triple Card Slot",
        discription:
          "The moto g04s comes with a triple card slot, allowing you to use 2 dedicated SIM cards and a dedicated Micro SD card. You can expand your phone's storage up to 1 TB, giving you plenty of space for your data while enjoying dual SIM convenience.",
      },
    ],
    specification: [
      {
        title: "General",
        spec_row_list: [
          {
            spec_title: "In The Box",
            spec_body:
              "Handset, 20W Charger, USB Type-C Cable, Guides, Sim Tool, Protective Cover, Protective Film",
          },
          {
            spec_title: "Model Number",
            spec_body: "PB360002IN",
          },
          {
            spec_title: "Model Name",
            spec_body: "g04s",
          },
          {
            spec_title: "Color",
            spec_body: "Satin Blue",
          },
          {
            spec_title: "Browse Type",
            spec_body: "Smartphones",
          },
          {
            spec_title: "SIM Type",
            spec_body: "Dual Sim",
          },
          {
            spec_title: "Hybrid Sim Slot",
            spec_body: "No",
          },
          {
            spec_title: "Touchscreen",
            spec_body: "Yes",
          },
          {
            spec_title: "OTG Compatible",
            spec_body: "Yes",
          },
          {
            spec_title: "Sound Enhancements",
            spec_body: "Single Speaker with Dolby Atmos",
          },
        ],
      },
      {
        title: "Display Features",
        spec_row_list: [
          {
            spec_title: "Display Size",
            spec_body: "16.76 cm (6.6 inch)",
          },
          {
            spec_title: "Resolution",
            spec_body: "1612 x 720 Pixels",
          },
          {
            spec_title: "Resolution Type",
            spec_body: "HD+",
          },
          {
            spec_title: "GPU",
            spec_body: "ARM Mali-G57 MP1",
          },
          {
            spec_title: "Display Type",
            spec_body: "HD+ IPS LCD 90Hz Display",
          },
        ],
      },
      {
        title: "Os & Processor Features",
        spec_row_list: [
          {
            spec_title: "Operating System",
            spec_body: "Android 14",
          },
          {
            spec_title: "Processor Brand",
            spec_body: "Unisoc",
          },
          {
            spec_title: "Processor Type",
            spec_body: "T606",
          },
          {
            spec_title: "Processor Core",
            spec_body: "Octa Core",
          },
          {
            spec_title: "Primary Clock Speed",
            spec_body: "1.6 GHz",
          },
          {
            spec_title: "Secondary Clock Speed",
            spec_body: "1.6 GHz",
          },
          {
            spec_title: "Operating Frequency",
            spec_body:
              "4G LTE: B1/B3/B5/B7/B8/B20/B28/B38/B40/B41, 3G UMTS: B1/B5/B8, 2G GSM: B3/B5/B8",
          },
        ],
      },
      {
        title: "Memory & Storage Features",
        spec_row_list: [
          {
            spec_title: "Internal Storage",
            spec_body: "64 GB",
          },
          {
            spec_title: "RAM",
            spec_body: "4 GB",
          },
          {
            spec_title: "Expandable Storage",
            spec_body: "1 TB",
          },
          {
            spec_title: "Supported Memory Card Type",
            spec_body: "MicroSD",
          },
          {
            spec_title: "Memory Card Slot Type",
            spec_body: "Dedicated Slot",
          },
        ],
      },
      {
        title: "Camera Features",
        spec_row_list: [
          {
            spec_title: "Primary Camera Available",
            spec_body: "Yes",
          },
          {
            spec_title: "Primary Camera",
            spec_body: "50MP Rear Camera",
          },
          {
            spec_title: "Primary Camera Features",
            spec_body:
              "Single Camera Setup: 50MP Main Camera (0.64um Pixel Size, PDAF), Features: Portrait, Photo, Night Vision, HDR, Leveler, Timer, Assistive Grid, Watermark, Video Features: Video Timelapse, Snap in Video Recording",
          },
          {
            spec_title: "Secondary Camera Available",
            spec_body: "Yes",
          },
          {
            spec_title: "Secondary Camera",
            spec_body: "5MP Front Camera",
          },
          {
            spec_title: "Secondary Camera Features",
            spec_body:
              "Front Camera Setup: 5MP Camera (f/2.2 Aperture, 1.12um Pixel Size), Features: Portrait, Photo, Face Retouch, HDR, Leveler, Assistive Grid, Watermark, Timer, Video Features: Video, Timelapse, Snap in Video Recording",
          },
          {
            spec_title: "Flash",
            spec_body: "Single LED Flash",
          },
          {
            spec_title: "HD Recording",
            spec_body: "Yes",
          },
          {
            spec_title: "Full HD Recording",
            spec_body: "Yes",
          },
          {
            spec_title: "Video Recording",
            spec_body: "Yes",
          },
          {
            spec_title: "Video Recording Resolution",
            spec_body:
              "Rear Camera: FHD (at 30 fps), HD (at 30 fps) | Front Camera: FHD (at 30 fps), HD (at 30 fps)",
          },
          {
            spec_title: "Frame Rate",
            spec_body: "30 fps",
          },
        ],
      },
      {
        title: "Connectivity Features",
        spec_row_list: [
          {
            spec_title: "Network Type",
            spec_body: "2G, 3G, 4G",
          },
          {
            spec_title: "Supported Networks",
            spec_body: "4G LTE, GSM, UMTS",
          },
          {
            spec_title: "Internet Connectivity",
            spec_body: "4G, 3G, Wi-Fi",
          },
          {
            spec_title: "3G",
            spec_body: "Yes",
          },
          {
            spec_title: "Micro USB Port",
            spec_body: "Yes",
          },
          {
            spec_title: "Micro USB Version",
            spec_body: "Type C Port (USB 2.0)",
          },
          {
            spec_title: "Bluetooth Support",
            spec_body: "Yes",
          },
          {
            spec_title: "Bluetooth Version",
            spec_body: "v5.0",
          },
          {
            spec_title: "Wi-Fi",
            spec_body: "Yes",
          },
          {
            spec_title: "Wi-Fi Version",
            spec_body: "Wi-Fi 802.11 a/b/g/n/ac (2.4 GHz | 5 GHz)",
          },
          {
            spec_title: "Wi-Fi Hotspot",
            spec_body: "Yes",
          },
          {
            spec_title: "USB Connectivity",
            spec_body: "Yes",
          },
          {
            spec_title: "Audio Jack",
            spec_body: "3.5mm",
          },
          {
            spec_title: "GPS Support",
            spec_body: "Yes",
          },
        ],
      },
      {
        title: "Other Details",
        spec_row_list: [
          {
            spec_title: "Smartphone",
            spec_body: "Yes",
          },
          {
            spec_title: "SIM Size",
            spec_body: "Nano Sim",
          },
          {
            spec_title: "SMS",
            spec_body: "Yes",
          },
          {
            spec_title: "Sensors",
            spec_body:
              "Fingerprint Sensor, Proximity Sensor, Ambient Light Sensor, Accelerometer",
          },
          {
            spec_title: "Upgradable Operating System",
            spec_body: "No OS Upgrade, 2 Years SMRs",
          },
          {
            spec_title: "Other Features",
            spec_body:
              "4GB Max RAM Boost Max, UFS 2.2, Corning Gorilla Glass 3, 15W Device Charging Capable, Water Protection: Water Repellent Design, Security: Fingerprint Reader, Face Unlock, Gestures: Press and Hold Power Button, System Navigation, Fast Flashlight, Three Finger Screenshot, Quickly Open Camera",
          },
          {
            spec_title: "GPS Type",
            spec_body: "GPS, A-GPS, LTEPP, SUPL, GLONASS, GALILEO",
          },
        ],
      },
      {
        title: "Multimedia Features",
        spec_row_list: [
          {
            spec_title: "FM Radio",
            spec_body: "Yes",
          },
          {
            spec_title: "FM Radio Recording",
            spec_body: "Yes",
          },
        ],
      },
      {
        title: "Battery & Power Features",
        spec_row_list: [
          {
            spec_title: "Battery Capacity",
            spec_body: "5000 mAh",
          },
        ],
      },
      {
        title: "Dimensions",
        spec_row_list: [
          {
            spec_title: "Width",
            spec_body: "74.53 mm",
          },
          {
            spec_title: "Height",
            spec_body: "163.49 mm",
          },
          {
            spec_title: "Depth",
            spec_body: "7.99 mm",
          },
          {
            spec_title: "Weight",
            spec_body: "180 g",
          },
        ],
      },
      {
        title: "Warranty",
        spec_row_list: [
          {
            spec_title: "Warranty Summary",
            spec_body: "1 Year on Handset and 6 Months on Accessories",
          },
          {
            spec_title: "Domestic Warranty",
            spec_body: "1 Year",
          },
        ],
      },
    ],
  };

  return (
    <div className='pt-4'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row -mx-4'>
          <aside className='md:flex-1 self-start lg:sticky lg:top-36 w-full'>
            <div className='h-[460px] w-full rounded-lg bg-base-content mb-4'>
              <ImageSlider images={data.img_list} />
            </div>
            <div className='flex -mx-2 mb-4'>
              <div className='w-1/2 px-2'>
                <button className='w-full bg-base-content text-base-100 py-4 px-4 rounded-xl font-bold'>
                  Add to Cart
                </button>
              </div>
              <div className='w-1/2 px-2'>
                <button className='w-full text-base-content bg-base-300 py-4 px-4 rounded-xl font-bold'>
                  Buy Now
                </button>
              </div>
            </div>
          </aside>
          <div className='md:flex-1 lg:px-4'>
            <h2 className='text-lg lg:text-3xl font-bold text-base-content mb-2  drop-shadow-xl '>
              {data.title}
            </h2>
            <div className='flex mb-4'>
              <div className='mr-4'>
                <span className='font-bold text-accent lg:text-3xl text-lg'>
                  {data.price}
                </span>
              </div>
              <div>
                <span className='font-bold text-base-content'>
                  Availability: {"      "}
                </span>
                <span className='text-base-content'>In Stock</span>
              </div>
            </div>
            <div className='w-full '>
              <span className='font-bold text-2xl  text-base-content text-right'>
                Product Description:
              </span>

              <DescAccordian Description={data.desc_long} />

              <span className='font-bold text-2xl text-base-content text-right'>
                Product Specifications:
              </span>

              <SpecTable specifications={data.specification} />
              <p className='text-base-content text-sm mt-2'></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
