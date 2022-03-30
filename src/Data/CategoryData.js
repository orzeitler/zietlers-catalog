import livingRoom1 from "../images/living room /room pictures/living-room1.jpg";
import livingRoom2 from "../images/living room /room pictures/living-room2.jpg";
import livingRoom3 from "../images/living room /room pictures/living-room3.jpg";
import chair from "../images/living room /chair.jpeg";
import curtain from "../images/living room /curtain.png";
import entranceShelf from "../images/living room /entrance-shelf.jpg";
import mirror from "../images/living room /mirror.jpg";
import pic1 from "../images/living room /pic1.jpg";
import pic2 from "../images/living room /pic2.jpg";
import pic4 from "../images/living room /pic4.jpg";
import plant1 from "../images/living room /plant1.jpg";
import plant2 from "../images/living room /plant2.jpg";
import plant3 from "../images/living room /plant3.jpg";
import rug from "../images/living room /rug.png";
import sofa from "../images/living room /sofa.jpeg";
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
import handMixer from "../images/kitchen/hand_mixer.jpeg";
import micro from "../images/kitchen/micro.jpg";
import blender from "../images/kitchen/blender.jpeg";
import airFry from "../images/kitchen/air_fry.jpeg";
import wineDude from "../images/kitchen/wine_bottle.jpg";
import bowels from "../images/kitchen/bowels.jpeg";
import cart from "../images/kitchen/cart.jpeg";
import ninja from "../images/kitchen/ninja.jpeg";
import tavnit1 from "../images/kitchen/tavnit1.jpg";
import tavnit2 from "../images/kitchen/tavnit2.jpg";
import tavnit3 from "../images/kitchen/tavnit3.jpg";
import canisters from "../images/kitchen/canisters.jpg";

import babyTheme from "../images/baby/baby_theme.jpg";
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
import katan from "../images/kidsRoom/Katan.jpeg"

import officeTheme1 from "../images/office/office_theme1.jpg";
import officeTheme2 from "../images/office/office_theme2.jpg";
import officeChair from "../images/office/office_chair.jpg";
import messageBoard from "../images/office/message_board.jpg";
import magnetBoard from "../images/office/magnet_board.jpeg";
import printer from "../images/office/printer.jpg";
import deco from "../images/office/deco.jpg";
import ep from "../images/office/ep.jpeg"
import lampO from "../images/office/lamp.jpeg"

import mesosim from "../images/design/mesosim.jpeg"
import baskets from "../images/design/baskets.jpeg"
import plant4 from "../images/design/plant4.jpg"

import tent from "../images/outDoors/tent.jpg";
import potsPans from "../images/outDoors/pots_pans.jpg";
import picnic from "../images/outDoors/picnic.jpg";
import bicks from "../images/outDoors/bicks.jpg";
import authentic from "../images/outDoors/aothentic.jpg";
import sportWatch from "../images/outDoors/sport_watch.jpeg"

import matress from "../images/more/matress.jpg"
import dresser from "../images/more/dresser.jpg"
import largeShelves from "../images/more/large_shelves.jpg"
import livingRoomTable from "../images/more/living_room_table.jpg"
import whiteChair from "../images/more/white_chair.jpg"
import foldTable from "../images/more/fold_table.jpg"
import vacum from "../images/more/vacum.jpeg"
import dryer from "../images/more/dryier.jpeg"
import sappa from "../images/more/sappa.jpeg"
import washing from "../images/more/washing.jpeg"
import fossa from "../images/more/fossa.jpg"
import glassCleaner from "../images/more/glass_cleaner.jpg"
import massager from "../images/more/massager.jpg"

import kia from "../images/cars/kia.jpeg"
import toyota from "../images/cars/toyota.jpeg"

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
            {id: '1', name: '2 כורסאות', description: 'כורסא לידו של kaza בגוון תכלת פסטל, המחיר עבור כורסא אחת', price: 400, image: chair, isSold: true, isAvailableInJune: false },
            {id: '4', name: 'מראה נפתחת', description: 'מֿראה נפתחת של Nooshka במצב מצויין, נקנתה לפני שנה', price: 1800, image: mirror, isSold: false, isAvailableInJune: false},
            {id: '13', name: 'שולחן סלון', description: 'שולחן סלון kaza, שני חלקים', price: 800, image: table, isSold: false, isAvailableInJune: false },
            {id: '2', name: 'וילונות ומוטות', description: 'וילונות עם מוטות ל3 חלונות ברוחבים משתנים, המחיר עבור סט לחלון' , price: 30, image: curtain, isSold: false, isAvailableInJune: false },
            {id: '7', name: 'תמונות', description: 'איורים ממוסגרים המחיר לאחת', price: 35, image: pic4, isSold: false, isAvailableInJune: false },
            {id: '11', name: 'שטיח', description: 'דורש ניקוי - למסירה', price: 0, image: rug, isSold: false, isAvailableInJune: false },
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
            {id: '15', name: 'סט סכיני שף', description: 'סט 6 סכיני שף מסדרת טום אביב של ARCOSTEEL + מעמד' , price: 380, image: knives, isSold: false, isAvailableInJune: false, link: 'https://cookshop.co.il/%D7%9E%D7%95%D7%A6%D7%A8/%D7%A1%D7%98-%D7%A1%D7%9B%D7%99%D7%A0%D7%99-%D7%A9%D7%A3-%D7%9E%D7%A2%D7%9E%D7%93-%D7%99%D7%95%D7%A7%D7%A8%D7%AA%D7%99-%D7%9E%D7%A1%D7%93%D7%A8%D7%AA-%D7%98%D7%95%D7%9D-%D7%90%D7%91%D7%99%D7%91/'},
            {id: '152', name: 'מכונת נספרסו', description: 'מכונת קפה של נספרסו' , price: 380, image: nespresso, isSold: true},
            {id: '153', name: 'מיקסר kmix', description: 'מיקסר kMix Picasso מקצועי KENWOOD דגם KMX750WH לבן. נרכש לפני שנה ונשמר כמיקסר ללא גלוטן' , price: 1200, image: mikser, isSold: false},
            {id: '155', name: 'מיקרו', description: 'מיקרוגל samsung כסוף' , price: 350, image: micro, isSold: false},
            {id: '157', name: 'מדיח כלים', description: 'מדיח כלים bosch נקנה ב2018'  , price: 1800, image: dishwasher, isSold: false, isAvailableInJune: true},
            {id: '159', name: 'מחזיק בקבוק יין', description: 'קישוט לבקבוק יין' , price: 40, image: wineDude, isSold: false},
            {id: '150', name: 'סט קערות', description: 'סט קערות, 9 חלקים ' , price: 150, image: bowels, isSold: true, link: 'https://www.thehut.com/kitchen-accessories/joseph-joseph-editions-nest-9-piece-food-preparation-set-sky/12689656.html'},
            {id: '1513', name: 'נינגה', description: 'מעבד מזון נינגה ' , price: 90, image: ninja, isSold: false, link: 'https://www.ivory.co.il/catalog.php?id=31470'},
            {id: '1513', name: 'תבנית אפייה', description: ' תבנית אפייה לעוגה מחולק לתאים' , price: 65, image: tavnit1, isSold: false, link: 'https://shop.super-pharm.co.il/home/kitchen/cooking-and-baking/baking-trays/%D7%AA%D7%91%D7%A0%D7%99%D7%AA-%D7%90%D7%A4%D7%99%D7%99%D7%94-%D7%9E%D7%97%D7%95%D7%9C%D7%A7%D7%AA-%D7%9C-18-%D7%91%D7%A8%D7%90%D7%95%D7%A0%D7%99%D7%96/p/mp-00045230'},
            {id: '1513', name: 'תבנית אפייה', description: 'תבנית אפיית קאפקייקס ' , price: 40, image: tavnit2, isSold: false, },
            {id: '1513', name: 'תבנית אפייה', description: ' תבניות אפייה מסיליקון המחיר לאחת' , price: 40, image: tavnit3, isSold: false},
            {id: '1513', name: 'מיכלי אחסון וקום', description: '2 מכלי אחסון בוקום ' , price: 40, image: canisters, isSold: false, link: 'https://www.uniqook.co.il/shop/%D7%A1%D7%98-2-%D7%9E%D7%99%D7%9B%D7%9C%D7%99-pop-%D7%A8%D7%91%D7%95%D7%A2-%D7%A7%D7%98%D7%9F-%D7%A7%D7%A6%D7%A8-1-%D7%9C%D7%99%D7%98%D7%A8/'}
        ]
    },
    {
        categoryName: 'ציוד תינוקות',
        categoryDescription: 'כמה שהם קטנים יש להם הכי הרבה דברים',
        roomPictures: [
            {imageSrc: babyTheme}
        ],
        items: [
            {id: '17', name: 'משטח פעילות', description: 'משטח פעילות פאזל', price: 250, image: activityMatres, isSold: true, isAvailableInJune: false },
            {id: '18', name: 'כדור פילאטיס', description: 'כדור פזיו גדול עם משאבת רגל', price: 50, image: pilatesBall, isSold: true, isAvailableInJune: false },
            {id: '19', name: 'כסא אוכל', description: 'כסא מאיקאה כולל כרית פנימית', price: 70, image: babyFoodChair, isSold: false, isAvailableInJune: true },
            {id: '20', name: 'כסאות בטיחות לאוטו', description: 'כסאות - למסירה', price: 0, image: carChairs, isSold: false, isAvailableInJune: false },
            {id: '21', name: 'מיטת תינוק', description: 'מיטה עם מזרון ונחשוש', price: 450, image: babyBed, isSold: false, isAvailableInJune: true },
            {id: '22', name: 'קישוטי קיר', description: 'ציורי יד על ידי האומנית ״חווה״', price: 40, image: wallDecorations, isSold: false, isAvailableInJune: false },
            {id: '24', name: 'מנשא 1', description: 'מנשא בייבי ביורן' , price: 350, image: carry1, isSold: false, isAvailableInJune: false },
            {id: '25', name: 'מנשא 2', description: 'מנשא argobaby' , price: 250, image: carry2, isSold: false, isAvailableInJune: false },
            {id: '27', name: 'בייבי סנס', description: 'מוניטור לשינה' , price: 100, image: monitor, isSold: false, isAvailableInJune: false },
            {id: '281', name: 'אמבטיה', description: 'אמבטית רחצה לתינוק שילב עם מעמד מתקפל, מתאימה לאמוד בתוך אמבטיה' , price: 100, image: bath, isSold: false, isAvailableInJune: false },
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
            {id: '29', name: '5 מדפים מרובעים', description: 'מדפים eket מאיקאה', price: 250, image: shelves, isSold: false, isAvailableInJune: false },
            {id: '31', name: 'מנורת קריאה', description: 'מנורת דובי פנדה', price: 50, image: lamp, isSold: true, isAvailableInJune: false },
            {id: '32', name: 'שידה להחתלה', description: 'שידה למסירה', price: 0, image: shida, isSold: false, isAvailableInJune: false },
            {id: '321', name: 'מיטת ילדים ', description: 'מיטת מעבר, כולל מעקה ומזרון', price: 100, image: bed, isSold: false, isAvailableInJune: true },
            {id: '323', name: 'מדף ספרים', description: 'מדף ספרים', price: 10, image: bookShelve, isSold: true, isAvailableInJune: false },
            // {id: '324', name: 'קטאן', description: 'סט משחק חדש לגמרי - לא נפתח', price: 70, image: katan, isSold: false, isAvailableInJune: false },
        ]
    },
    {
        categoryName: 'עיצוב וקישוט הבית',
        categoryDescription: 'דברים קטנים וגדולים שמוסיפים עיצוב לבית',
        roomPictures: [],
        items: [
            {id: '151', name: 'שעון', description: 'שעון קיר קטן, קוטר 21 סמ ' , price: 40, image: clock, isSold: false, isAvailableInJune: false},
            {id: '9', name: ' ״אוזן הפיל״', description: 'עציץ בינוני', price: 150, image: plant2, isSold: false, isAvailableInJune: false },
            {id: '8', name: ' ״סנסיווירה״', description: 'עציץ גדול בריא ולא דורש הרבה מים ואור', price: 200, image: plant1, isSold: true, isAvailableInJune: false },
            {id: '10', name: 'דקל גדול', description: 'דקל בריא בעציץ גדול', price: 250, image: plant3, isSold: false, isAvailableInJune: false },
            {id: '3', name: 'מדף', description: 'מדף מסדרת Cubist של SOHO. כולל עציץ.', price: 100, image: entranceShelf, isSold: false, link: 'https://www.sohocenter.co.il/products/mdf-dkurtibi-cubist'},
            {id: '101', name: 'מדפים משושים', description: '3 מדפים בגדלים שונים', price: 150, image: mesosim, isSold: false, isAvailableInJune: false },
            {id: '103', name: 'עציץ גדול', description: 'עציץ גדול של ספטיפיליום', price: 100, image: plant4, isSold: false, isAvailableInJune: false },
            {id: '102', name: 'סלסלות', description: '2 סלסלות קש ניתן לקנות גם חלק', price: 100, image: baskets, isSold: false, isAvailableInJune: false },
            {id: '503', name: 'כיסי ״פלורה״', description: 'כיסים לתלייה לעציצים או חפצים אחרים' , price: 20, image: fossa, isSold: false, isAvailableInJune: false },
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
            {id: '33', name: 'כסא משרדי', description: 'כסא משרדי מאיקאה', price: 150, image: officeChair, isSold: true, isAvailableInJune: false , link: 'https://www.ikea.com/il/he/p/flintan-office-chair-black-10489028/'},
            {id: '34', name: 'לוח שעם', description: 'לוח שעם, האייל כלול' , price: 50, image: messageBoard, isSold: false, isAvailableInJune: false },
            {id: '35', name: 'לוח מגנטי', description: 'לוח מגנטי לתמונות והודעות' , price: 50, image: magnetBoard, isSold: true, isAvailableInJune: false },
            {id: '36', name: 'מדפסת', description: 'מדפסת hp בת 4 עם מחסנית דיו נוספת' , price: 100, image: printer, isSold: true, isAvailableInJune: false },
            {id: '371', name: ' ep ', description: 'סנסנור מקורי של חברת אוגורי - סוללה טובה לעד שלוש שנים (אולי)' , price: 400, image: ep, isSold: true, isAvailableInJune: false, link: 'https://www.ebay.com/itm/233966151240'},
            {id: '371', name: 'מנורת שולחן', description: 'מנורת שולחן איקיא - מגיעה עם נורה ספייר' , price: 100, image: lampO, isSold: false, isAvailableInJune: false},
        ]
    },
    {
        categoryName: 'ציוד טיולים',
        categoryDescription: 'קאמפיניג עד אופניים',
        roomPictures: [],
        items: [
            {id: '38', name: 'אוהל 5', description: 'אוהל נפתח פתיחה מהירה - מתאים ל5 אנשים', price: 200, image: tent, isSold: true, isAvailableInJune: false },
            {id: '39', name: 'אופניים', description: '2 זוגות אופניים, המחיר עבור לבן כילאי 4-6 נקנה לפני שנה הכחולים למסירה' , price: 250, image: bicks, isSold: true, isAvailableInJune: false, link: 'https://www.google.com/shopping/product/1835182137764665690?q=%D7%93%D7%A7%D7%98%D7%9C%D7%95%D7%9F+%D7%90%D7%95%D7%A4%D7%A0%D7%99+%D7%99%D7%9C%D7%93%D7%99%D7%9D&client=ms-android-samsung-ss&biw=412&bih=777&tbs=vw:g&prmd=inmv&sxsrf=APq-WBuh2v-h0gfYYohjcq4z95M9UE3IaQ:1647892516135&prds=eto:6835963195792270536_0,cdl:1,prmr:1,rsk:PC_16298500031382095065,cs:1' },
            {id: '40', name: 'צילייה משפחתית', description: 'צילייה לים אותנטיק Family OTENTIK - השתמשנו רק קיץ אחד במצב טוב' , price: 200, image: authentic, isSold: true, isAvailableInJune: false, link: 'https://xhome.co.il/product/%D7%A6%D7%99%D7%9C%D7%99%D7%99%D7%94-%D7%9C%D7%99%D7%9D-%D7%90%D7%95%D7%AA%D7%A0%D7%98%D7%99%D7%A7-family-otentik/?attribute_pa_color=%25d7%25aa%25d7%259b%25d7%259c%25d7%25aa&gclid=CjwKCAjwxOCRBhA8EiwA0X8hi076qcSnOBFEtBvQA2iatt_PwIxE8NzTKcUCEk-rk0eh1xkPaB8BjhoCeFQQAvD_BwE' },
            {id: '41', name: 'פויקה ומחבתות', description: 'פוייקה 4, שתי מחבתות למדורה, פויקה קטנטן. המחיר להכל ניתן לקנות חלק' , price: 250, image: potsPans, isSold: true, isAvailableInJune: false },
            {id: '42', name: 'צידיניות', description: 'צמד צידיניות - הקטנה נכנסת בגדולה' , price: 100, image: picnic, isSold: true, isAvailableInJune: false },
            {id: '421', name: 'שעון ספורט suunit', description: 'שעון חדש לגמרי בקופסא נקנה לפני שנתיים לא היה בשימוש מעולם' , price: 500, image: sportWatch, isSold: false, isAvailableInJune: false, link: 'https://www.suunto.com/Support/sports-watches-support/suunto-spartan-sport-wrist-hr/'},
        ]
    },
    {
        categoryName: 'דברים נוספים',
        categoryDescription: 'עוד דברים מרחבי הבית',
        roomPictures: [],
        items: [
            {id: '43', name: 'מזרון זוגי גדול', description: 'מזרון של דוקטור גב תלת שכבתי triple system גודל: 1.60 על 1.90', price: 3800, image: matress, isSold: false, isAvailableInJune: false, link: 'https://www.dr-gav.co.il/sleep/mattresses/twin-mattresses' },
            {id: '44', name: 'שידה', description: 'שידה גדולה מעץ מלא' , price: 450, image: dresser, isSold: true, isAvailableInJune: false },
            {id: '45', name: 'סט ספריות', description: 'סט ספריות דגם billy ניתן לקנות גם חלקים' , price: 1000, image: largeShelves, isSold: false, isAvailableInJune: false, link: 'https://www.ikea.com/il/he/p/billy-bookcase-white-stained-oak-veneer-90404209/#content' },
            {id: '46', name: 'שולחן סלון', description: 'שולחן סלון שלושה חלקים של שומרת הזורע' , price: 1000, image: livingRoomTable, isSold: false, isAvailableInJune: false },
            {id: '491', name: 'מכונת כביסה', description: 'מכונת כביסה פתיחה עליונה למסירה' , price:  0, image: washing, isSold: false, isAvailableInJune: true },
            {id: '50', name: 'שואב אבק', description: 'שואב אבק jimmy' , price: 200, image: vacum, isSold: true, isAvailableInJune: false },
            {id: '501', name: 'ספפה', description: 'מיטה נפתחת עם ארגז אחסון - למסירה' , price: 0, image: sappa, isSold: false, isAvailableInJune: false },
            {id: '502', name: 'מנקה חלונות', description: 'מנקה חלונות חשמלי של חברת jimmy חדש לגמרי' , price: 170, image: glassCleaner, isSold: false, link: 'https://www.banggood.com/JIMMY-VW302-Cordless-Window-Glass-Vacuum-Cleaner-with-Squeegee,Spray-Bottle-p-1536802.html' },
            {id: '504', name: 'מכשיר עיסוי', description: 'מכשיר עיסוי quad action של דוקטור גב' , price: 350, image: massager, isSold: false, isAvailableInJune: false, link: 'https://www.biogaya.co.il/home-appliance/quad-action-dr-gav?gclid=Cj0KCQjw_4-SBhCgARIsAAlegrWPCE2MLQrBRbhSBreOFqsSRyhOdxKPZkuvpt3iSHoQg-1cXfuWDUsaAnLsEALw_wcB' },
        ]
    },
    {
        categoryName: 'רכבים',
        categoryDescription: 'כלי התחבורה שלנו',
        roomPictures: [],
        items: [
            {id: '51', name: 'קיה פיקנטו', description: 'קיה פיקאנטו 2013, 120000 קמ, טסט מנומבר האחרון', price: 31500, image: kia, isSold: true, isAvailableInJune: false },
            {id: '52', name: 'טיוטה קורולה', description: 'טיוטא קורולה 2011, 230000 קמ, יד 3 , טסט עד אוגוסט ' , price: 28000, image: toyota, isSold: false, isAvailableInJune: true },
        ]
    }
]