import livingRoom1 from "../images/living room /room pictures/living-room1.jpg";
import livingRoom2 from "../images/living room /room pictures/living-room2.jpg";
import livingRoom3 from "../images/living room /room pictures/living-room3.jpg";
import chair from "../images/living room /chair.jpg";
import curtain from "../images/living room /curtain.png";
import entranceShelf from "../images/living room /entrance-shelf.jpg";
import mirror from "../images/living room /mirror.jpg";
import pic1 from "../images/living room /pic1.jpg";
import pic2 from "../images/living room /pic2.jpg";
import pic3 from "../images/living room /pic3.jpg";
import plant1 from "../images/living room /plant1.jpg";
import plant2 from "../images/living room /plant2.jpg";
import plant3 from "../images/living room /plant3.jpg";
import rug from "../images/living room /rug.png";
import sofa from "../images/living room /sofa.png";
import table from "../images/living room /table.jpg";

import kitchenFullRoom from "../images/kitchen/kitchen_full_room.jpg";
import kitchenFullRoomR from "../images/kitchen/kitchen_glasses.jpg";
import kitchenFullRoomL from "../images/kitchen/kitchen_oven.jpg";
import oven from "../images/kitchen/oven_1.jpg";
import knives from "../images/kitchen/knives.jpg";
import clock from "../images/kitchen/clock.jpg";
import nespresso from "../images/kitchen/nespresso.jpg";
import mikser from "../images/kitchen/mikser_1.jpg";
import dishwasher from "../images/kitchen/dishwaser.jpg";
import wineGlasses from "../images/kitchen/wine_glasses.jpg";
import handMixer from "../images/kitchen/hand_mixer.jpeg";
import micro from "../images/kitchen/micro.jpg";
import blender from "../images/kitchen/blender.jpeg";
import airFry from "../images/kitchen/air_fry.jpeg";
import wineDude from "../images/kitchen/wine_bottle.jpg";
import bowels from "../images/kitchen/bowels.jpeg";
import cart from "../images/kitchen/cart.jpeg";
import ninja from "../images/kitchen/ninja.jpeg";

import babyTheme from "../images/baby/baby_theme.jpg";
import babyCrib1 from "../images/baby/baby_crib_2.jpg";
import activityMatres from "../images/baby/activity_matress.jpg";
import pilatesBall from "../images/baby/pilates_ball.jpg";
import babyFoodChair from "../images/baby/baby_food_chair.jpg";
import carChairs from "../images/baby/car_chairs.jpg";
import babyBed from "../images/baby/baby_bed.jpg";
import wallDecorations from "../images/baby/wall_decorations.jpg";
import radiator from "../images/baby/radiator.jpg";
import carry1 from "../images/baby/carry1.jpg";
import carry2 from "../images/baby/carry2.jpg";
import stroller from "../images/baby/stroller.jpg";
import monitor from "../images/baby/monitor.jpg";
import babyNetta from "../images/baby/netta.jpeg";
import bath from "../images/baby/bath.jpeg";

import kidsTheme1 from "../images/kidsRoom/kids_theme1.jpg";
import kidsTheme2 from "../images/kidsRoom/kids_theme2.jpg";
import kidsTheme3 from "../images/kidsRoom/kids_theme3.jpg";
import shelves from "../images/kidsRoom/shelves.jpg";
import bedChair from "../images/kidsRoom/bed_chair.jpg";
import lamp from "../images/kidsRoom/lamp.jpg";
import shida from "../images/kidsRoom/shida.jpg";
import bed from "../images/kidsRoom/bed.jpeg";
import konanit from "../images/kidsRoom/konanit.jpeg";
import bookShelve from "../images/kidsRoom/bookShelve.jpeg";

import officeTheme1 from "../images/office/office_theme1.jpg";
import officeTheme2 from "../images/office/office_theme2.jpg";
import officeChair from "../images/office/office_chair.jpg";
import messageBoard from "../images/office/message_board.jpg";
import magnetBoard from "../images/office/magnet_board.jpeg";
import printer from "../images/office/printer.jpg";
import deco from "../images/office/deco.jpg";
import ep from "../images/office/ep.jpeg"

import tent from "../images/outDoors/tent.jpg";
import potsPans from "../images/outDoors/pots_pans.jpg";
import picnic from "../images/outDoors/picnic.jpg";
import bicks from "../images/outDoors/bicks.jpg";
import authentic from "../images/outDoors/aothentic.jpg";

import matress from "../images/more/matress.jpg"
import dresser from "../images/more/dresser.jpg"
import largeShelves from "../images/more/large_shelves.jpg"
import livingRoomTable from "../images/more/living_room_table.jpg"
import whiteChair from "../images/more/white_chair.jpg"
import foldTable from "../images/more/fold_table.jpg"
import vacum from "../images/more/vacum.jpeg"
import dryer from "../images/more/dryier.jpeg"

import kia from "../images/cars/kia.jpeg"
//import toyota from "../images/cars/toyota.jpeg"

export const CategoryData = [
    {
        categoryName: 'סלון',
        categoryDescription: 'כל הפריטים למכירה - כולל התמונות והווילנות',
        roomPictures: [
            {imageSrc: livingRoom1, description: 'דפדף בין תמונות הסלון - כל הפריטים למכירה'},
            {imageSrc: livingRoom2},
            {imageSrc: livingRoom3},
        ],
        items: [
            {id: '1', name: '2 כורסאות', description: 'כורסא לידו של kaza בגוון תכלת פסטל, המחיר עבור כורסא אחת', price: 400, image: chair, isSold: false, isAvailableInJune: false },
            {id: '4', name: 'מראה נפתחת', description: 'כיסא מאיקיא מדגם kjzh בצבע לבן - ישנם שתיים כאלה', price: 50, image: mirror, isSold: false, isAvailableInJune: false},
            {id: '13', name: 'שולחן סלון', description: 'שולחן סלון, שתי חלקים', price: 900, image: table, isSold: false, isAvailableInJune: false },
            {id: '2', name: 'וילונות ומוטות', description: 'וילונות עם מוטות ל3 חלונות ברוחבים משתנים, המחיר עבור סט לחלון' , price: 75, image: curtain, isSold: false, isAvailableInJune: false },
            {id: '3', name: 'מדף', description: 'מדף מסדרת Cubist של SOHO. כולל עציץ.', price: 100, image: entranceShelf, isSold: false, link: 'https://www.sohocenter.co.il/products/mdf-dkurtibi-cubist'},
            {id: '5', name: 'ציור באפלו', description: 'ציור יד , 65 על 60', price: 200, image: pic1, isSold: false, isAvailableInJune: false },
            {id: '6', name: 'ציור נשר', description: 'ציור יד , 48 על 52', price: 200, image: pic2, isSold: false, isAvailableInJune: false },
            {id: '7', name: 'ציור צבי', description: 'ציור יד , 48 על 52', price: 200, image: pic3, isSold: false, isAvailableInJune: false },
            {id: '8', name: ' ״סנסיווירה״', description: 'עציץ גדול בריא ולא דורש הרבה מים', price: 200, image: plant1, isSold: false, isAvailableInJune: false },
            {id: '9', name: ' ״אוזן הפיל״', description: 'עציץ בינוני', price: 150, image: plant2, isSold: false, isAvailableInJune: false },
            {id: '10', name: 'דקל גדול', description: 'דקל בריא בעציץ גדול', price: 250, image: plant3, isSold: false, isAvailableInJune: false },
            {id: '11', name: 'שטיח', description: 'קצת ישן - למסירה', price: 0, image: rug, isSold: false, isAvailableInJune: false },
            {id: '12', name: 'סט ספות', description: 'סט ספות 2 חלקים מאיאקה - ניתן להחליף ריפוד', price: 400, image: sofa, isSold: false, isAvailableInJune: true },
        ]
    },
    {
        categoryName: 'מטבח',
        categoryDescription: 'כלי מטבח, מכשירי חשמל ועוד..',
        roomPictures: [
            {imageSrc: kitchenFullRoom},
            {imageSrc: kitchenFullRoomR},
            {imageSrc: kitchenFullRoomL},
        ],
        items: [
            {id: '14', name: 'תנור אפייה', description: 'תנור אפייה AEG דגם BPE255632W, בילט-אין ופירוליטי עם מסילות טלסקופיות + 3 תבניות אפייה ורשת צלייה. נרכש בנובמבר 2018', price: 1600, image: oven, isSold: false, isAvailableInJune: false },
            {id: '15', name: 'סט סכיני שף', description: 'סט 6 סכיני שף מסדרת טום אביב של ARCOSTEEL + מעמד' , price: 380, image: knives, isSold: false, isAvailableInJune: false},
            {id: '151', name: 'שעון', description: 'שעון קיר קטן, קוטר 21 סמ ' , price: 40, image: clock, isSold: false, isAvailableInJune: false},
            {id: '152', name: 'מכונת נספרסו', description: 'מכונ' , price: 380, image: nespresso, isSold: false},
            {id: '153', name: 'מיקסר kmix', description: 'מיקסר kMix Picasso מקצועי KENWOOD קנווד דגם KMX750WH לבן. נרכש לפני שנה ונשמר כמיקסר ללא גלוטן' , price: 1200, image: mikser, isSold: false},
            {id: '154', name: 'סיר טיגון ללא שמן', description: 'סיר טיגון על אוויר חם' , price: 100, image: airFry, isSold: false, link: 'https://tapdesign.co.il/items/3737131-%D7%A1%D7%99%D7%A8-%D7%98%D7%99%D7%92%D7%95%D7%9F-%D7%A1%D7%9E%D7%95%D7%A8%D7%90%D7%99-'},
            {id: '155', name: 'מיקרו', description: 'מיקרוגל samsung כסוף' , price: 350, image: micro, isSold: false},
            {id: '156', name: 'עגלת מטבח', description: 'עגלת איחסון על גלגלים בצבע שחור' , price: 80, image: cart, isSold: false, link: 'https://www.ikea.com/il/he/p/raskog-trolley-black-90333976/'},
            {id: '157', name: 'מדיח כלים', description: 'מדיח כלים bosch נקנה ב2018'  , price: 500, image: dishwasher, isSold: false, isAvailableInJune: true},
            {id: '158', name: 'כוסות יין', description: 'כוסות יין - המחיר הוא עבור כוס בודדת וישנם 24 סהכ' , price: 5, image: wineGlasses, isSold: false},
            {id: '159', name: 'מחזיק בקבוק יין', description: 'קישוט לבקבוק יין' , price: 50, image: wineDude, isSold: false},
            {id: '150', name: 'סט קערות', description: 'סט קערות, 9 חלקים ' , price: 150, image: bowels, isSold: false, link: 'https://www.thehut.com/kitchen-accessories/joseph-joseph-editions-nest-9-piece-food-preparation-set-sky/12689656.html'},
            {id: '1511', name: 'מעבד מזון ידני', description: 'מעבד מזון ידני של Graetz' , price: 50, image: handMixer, isSold: false},
            {id: '1512', name: 'בלנדר ידני', description: 'מיקסר יד לבן סאוטר ' , price: 70, image: blender, isSold: false, link: 'https://www.payngo.co.il/232427.html'},
            {id: '1513', name: 'נינגה', description: 'מעבד מזון נינגה ' , price: 90, image: ninja, isSold: false, link: 'https://www.ivory.co.il/catalog.php?id=31470'}
        ]
    },
    {
        categoryName: 'ציוד תינוקות',
        categoryDescription: 'כמה שהם קטנים יש להם הכי הרבה דברים',
        roomPictures: [
            {imageSrc: babyTheme}
        ],
        items: [
            {id: '16', name: 'לול', description: 'לול מתקפל', price: 300, image: babyCrib1, isSold: true },
            {id: '17', name: 'משטח פעילות', description: 'משטח פעילות פאזל', price: 250, image: activityMatres, isSold: true, isAvailableInJune: false },
            {id: '18', name: 'כדור פילאטיס', description: 'חובה לכל מוציא גראפסים מקצועי', price: 50, image: pilatesBall, isSold: false, isAvailableInJune: false },
            {id: '19', name: 'כסא אוכל', description: 'כסא מאיקיאה', price: 70, image: babyFoodChair, isSold: false, isAvailableInJune: true },
            {id: '20', name: 'כסאות בטיחות לאוטו', description: 'כסאות עם בין שנה ל4 שנים תקינות -למסירה', price: 0, image: carChairs, isSold: false, isAvailableInJune: false },
            {id: '21', name: 'מיטת תינוק', description: 'מיטה עםן מזרון ונחשוש', price: 400, image: babyBed, isSold: false, isAvailableInJune: true },
            {id: '22', name: 'קישוטי קיר', description: 'ציורי יד על ידי האומנית ״חווה״', price: 50, image: wallDecorations, isSold: false, isAvailableInJune: false },
            {id: '23', name: 'רדיאטור', description: 'רדיאטור 11 צלעות' , price: 150, image: radiator, isSold: false, isAvailableInJune: false },
            {id: '24', name: 'מנשא 1', description: 'מנשא בייבי ביורן' , price: 350, image: carry1, isSold: false, isAvailableInJune: false },
            {id: '25', name: 'מנשא 2', description: 'מנשא argobaby' , price: 250, image: carry2, isSold: false, isAvailableInJune: false },
            {id: '26', name: 'עגלה', description: 'עגלה אמבטיה + ישיבה, באה עם סט בדים להחלפה מלאה' , price: 300, image: stroller, isSold: true },
            {id: '27', name: 'מוניטור', description: 'מוניטור לשינה' , price: 100, image: monitor, isSold: false, isAvailableInJune: false },
            {id: '28', name: 'ילדה', description: 'להשכרה בלבד לעד שלושה ימים - ילדה ממש מתוקה ביום, במהלך הלילה מתעוררת 5 פעמים, לא רוצה בקבוק ורק יונקת, אנחנו עייפים' , price: -3000, image: babyNetta, isSold: false, isAvailableInJune: false },
            {id: '281', name: 'אמבטיה', description: 'אמבטית רחצה לתינוק עם מעמד מתקפל, מתאימה לאמוד בתוך אמבטיה' , price: 100, image: bath, isSold: false, isAvailableInJune: false },
        ]
    },
    {
        categoryName: 'חדר ילדים',
        categoryDescription: 'מעבר לרהיטים יש גם מלא ספרים וצעצועים - ב״אולם התצוגה״ בלבד',
        roomPictures: [
            {imageSrc: kidsTheme1},
            {imageSrc: kidsTheme2},
            {imageSrc: kidsTheme3},
        ],
        items: [
            {id: '29', name: '5 מדפים מרובעים', description: 'מדפים מאיקיאה', price: 250, image: shelves, isSold: false, isAvailableInJune: false },
            {id: '30', name: 'כורסה נפתחת למיטת יחיד, כולל כיסוי מיטה וארגז מצעים', description: 'כורסא נפתחת למיטת יחיד, באה עם ארגז קטן', price: 500, image: bedChair, isSold: false, isAvailableInJune: false, link: 'https://www.ikea.com/il/he/p/lycksele-loevas-chair-bed-vansbro-bright-green-s59386991/' },
            {id: '31', name: 'מנורת קריאה', description: 'מנורת דובי פנדה', price: 50, image: lamp, isSold: false, isAvailableInJune: false },
            {id: '32', name: 'שידה', description: 'שידה למסירה', price: 0, image: shida, isSold: false, isAvailableInJune: false },
            {id: '321', name: 'מיטת ילדים ומזרון', description: 'מיטת ילדים עם מעכה ומזרון', price: 100, image: bed, isSold: false, isAvailableInJune: true },
            {id: '322', name: 'כוננית', description: 'כוננית לספרים וצעצועים', price: 700, image: konanit, isSold: false, isAvailableInJune: false, link: 'https://www.ikea.com/il/he/p/billy-bookcase-white-stained-oak-veneer-90404209/#content' },
            {id: '323', name: 'מדף ספרים', description: 'מדף ספרים', price: 10, image: bookShelve, isSold: false, isAvailableInJune: false },
        ]
    },
    {
        categoryName: 'משרד ביתי',
        categoryDescription: 'כל החפצים של המשרד הביתי שלנו',
        roomPictures: [
            {imageSrc: officeTheme1},
            {imageSrc: officeTheme2},
        ],
        items: [
            {id: '33', name: 'כסא משרדי', description: 'כסא משרדי מאיקאה', price: 150, image: officeChair, isSold: false, isAvailableInJune: false , link: 'https://www.ikea.com/il/he/p/flintan-office-chair-black-10489028/'},
            {id: '34', name: 'לוח שעם', description: 'לוח שעם, האייל כלול' , price: 50, image: messageBoard, isSold: false, isAvailableInJune: false },
            {id: '35', name: 'לוח מגנטי', description: 'לוח מגנטי לתמונות הודעות' , price: 50, image: magnetBoard, isSold: false, isAvailableInJune: false },
            {id: '36', name: 'מדפסת', description: 'מדפסת hp בת 4 עם מחסנית דיו נוספת' , price: 100, image: printer, isSold: false, isAvailableInJune: false },
            {id: '37', name: 'ממסר deco', description: '2 מכשירי mesh של חברת deco' , price: 300, image: deco, isSold: false, isAvailableInJune: false },
        ]
    },
    {
        categoryName: 'ציוד טיולים',
        categoryDescription: 'קאמפיניג עד אופניים',
        roomPictures: [],
        items: [
            {id: '38', name: 'אוהל 6', description: 'אוהל נפתח פתיחה מהירה - מתאים ל6 אנשים', price: 200, image: tent, isSold: false, isAvailableInJune: false },
            {id: '39', name: 'אופניים', description: '2 זוגות אופניים פשוטים המחיר הוא עבור זוג' , price: 100, image: bicks, isSold: false, isAvailableInJune: false },
            {id: '40', name: 'צליית אוטיניטיק משפחתית', description: 'צלייה מדגם משפחתי - השתמשנו רק קיץ אחד במצב טוב' , price: 200, image: authentic, isSold: false, isAvailableInJune: false },
            {id: '41', name: 'פויקה ומחבתות', description: 'פוקיה 4, שתי מחבתות למדורה, פויקה קטנטן. המחיר להכל ניתן לקנות חלק' , price: 250, image: potsPans, isSold: false, isAvailableInJune: false },
            {id: '42', name: 'צידיניות', description: 'צמד צידיניות - הקטנה נכנסת בגדולה' , price: 100, image: picnic, isSold: false, isAvailableInJune: false },
        ]
    },
    {
        categoryName: 'דברים נוספים',
        categoryDescription: 'עוד דברים מרחבי הבית',
        roomPictures: [],
        items: [
            {id: '43', name: 'מזרון זוגי גדול', description: 'מזרון של דוקטור גב תלת שכבתי triple system', price: 3800, image: matress, isSold: false, isAvailableInJune: false },
            {id: '44', name: 'שידה', description: 'שידה גדולה מעץ מלא' , price: 500, image: dresser, isSold: false, isAvailableInJune: false },
            {id: '45', name: 'כוננית פינתית', description: 'כוננית גבוהה ניתן לקנות גם חלקים' , price: 1000, image: largeShelves, isSold: false, isAvailableInJune: false },
            {id: '46', name: 'שולחן סלון', description: 'שולחן סלון שלושה חלקים' , price: 300, image: livingRoomTable, isSold: false, isAvailableInJune: false },
            {id: '47', name: 'כסא', description: '2 כסאות INGOLF איקאה,' , price: 100, image: whiteChair, isSold: false, isAvailableInJune: false },
            {id: '48', name: 'שולחן אוכל מתקפל', description: 'שולחן איקאה עם כנפיים מתקפלות' , price: 250, image: foldTable, isSold: false, isAvailableInJune: false },
        ]
    }
]