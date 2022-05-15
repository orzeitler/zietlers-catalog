import livingRoom1 from "../images/living room /room pictures/living-room1.jpg";
import livingRoom2 from "../images/living room /room pictures/living-room2.jpg";
import livingRoom3 from "../images/living room /room pictures/living-room3.jpg";
import curtain from "../images/living room /curtain.png";
import mirror from "../images/living room /mirror.jpg";
import plant2 from "../images/living room /plant2.jpg";
import sofa from "../images/living room /sofa.jpeg";
import table from "../images/living room /table.jpg";

import kitchenFullRoom from "../images/kitchen/kitchen_full_room.jpg";
import kitchenFullRoomR from "../images/kitchen/kitchen_glasses.jpg";
import kitchenFullRoomL from "../images/kitchen/kitchen_oven.jpg";
import mikser from "../images/kitchen/mikser_1.jpg";
import oven_1 from "../images/kitchen/oven_1.jpg"
import dishwasher from "../images/kitchen/dishwaser.jpg";
import micro from "../images/kitchen/micro.jpg";
import bigPot from "../images/kitchen/bigpot.jpeg";
import potAndPans from "../images/kitchen/pots.jpeg";
import fridge from "../images/kitchen/fridge.jpeg";
import korning from "../images/kitchen/korning.jpeg";
import haimKohen from "../images/kitchen/haimKohen.jpeg";


import tavnit1 from "../images/kitchen/tavnit1.jpg";
// import tavnit3 from "../images/kitchen/tavnit3.jpg";
// import canisters from "../images/kitchen/canisters.jpg";

import babyTheme from "../images/baby/baby_theme.jpg";
import activityMatres from "../images/baby/activity_matress.jpg";
import babyFoodChair from "../images/baby/baby_food_chair.jpg";
import carChairs from "../images/baby/car_chairs.jpg";
import babyBed from "../images/baby/baby_bed.jpg";
import carry1 from "../images/baby/carry1.jpg";
import carry2 from "../images/baby/carry2.jpg";
import monitor from "../images/baby/monitor.jpg";
import bath from "../images/baby/bath.jpeg";

import kidsTheme1 from "../images/kidsRoom/kids_theme1.jpg";
import kidsTheme2 from "../images/kidsRoom/kids_theme2.jpg";
import kidsTheme3 from "../images/kidsRoom/kids_theme3.jpg";
import shelves from "../images/kidsRoom/shelves.jpg";
import lamp from "../images/kidsRoom/lamp.jpg";
import shida from "../images/kidsRoom/shida.jpg";
import kavaret from "../images/kidsRoom/konanit.jpeg";
import bed from "../images/kidsRoom/bed.jpeg";

import messageBoard from "../images/office/message_board.jpg";

import baskets from "../images/design/baskets.jpeg";
import plants from "../images/design/plants.jpeg";
import trees from "../images/design/trees.jpeg";
import lamp1 from "../images/design/lamp.png";

import potsPans from "../images/outDoors/pots_pans.jpg";
import matressOut from "../images/outDoors/matress-out.jpeg";
import hamock from "../images/outDoors/hamock.jpeg";
import pool from "../images/outDoors/pool.jpeg";

import matress from "../images/more/matress.jpeg"
import largeShelves from "../images/more/large_shelves.jpg"
import livingRoomTable from "../images/more/living_room_table.jpg"
import dryier from "../images/more/dryier.jpeg"
import tv from "../images/more/tv.jpeg"

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
            {id: '13', name: 'שולחן סלון', description: 'שולחן סלון kaza, שני חלקים', price: 800, image: table, isSold: false, isAvailableInJune: false },
            {id: '2', name: 'וילונות ומוטות', description: 'וילונות עם מוטות ברוחבים משתנים, המחיר עבור סט לחלון' , price: 30, image: curtain, isSold: false, isAvailableInJune: false },
            {id: '12', name: 'סט ספות', description: 'סט ספות 2 חלקים מאיאקה - ניתן להחליף ריפוד', price: 400, image: sofa, isSold: true, isAvailableInJune: false },
            {id: '4', name: 'מראה נפתחת', description: 'מֿראה נפתחת של Nooshka במצב מצויין, נקנתה לפני שנה', price: 1700, image: mirror, isSold: false, isAvailableInJune: false},
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
            {id: '153', name: 'מיקסר kmix', description: 'מיקסר kMix Picasso מקצועי KENWOOD דגם KMX750WH לבן. נרכש לפני שנה ונשמר כמיקסר ללא גלוטן' , price: 800, image: mikser, isSold: false},
            {id: '155', name: 'מיקרו', description: 'מיקרוגל samsung כסוף' , price: 200, image: micro, isSold: true},
            {id: '157', name: 'מדיח כלים', description: 'מדיח כלים bosch נקנה ב2018'  , price: 800, image: dishwasher, isSold: false, isAvailableInJune: false},
            {id: '157', name: 'תנור', description: 'תנור AEG ,פירוליטי, נקנה ב2018'  , price: 500, image: oven_1, isSold: false, isAvailableInJune: false},
            {id: '158', name: 'סט קורנינג', description: 'סט של צלחת גדולה צלחת בנונית וקערה 24 חלקים ', price: 300, image: korning, isSold: true, isAvailableInJune: false},
            {id: '159', name: 'סיר אינדוקציה ענק', description: 'סיר אינדוקציה 36סמ של חברת Laguiole', price: 100, image: bigPot, isSold: false, isAvailableInJune: false},
            {id: '1599', name: 'מחבתות וסירים', description: 'מחבתות וסירי אינדוקציה מחיר לפריט', price: 30, image: potAndPans, isSold: false, isAvailableInJune: false},
            {id: '1599', name: 'סט מתכונים', description: 'סט מתכונים של חיים כהן', price: 50, image: haimKohen, isSold: true, isAvailableInJune: false},
            {id: '1599', name: 'מקרר', description: 'מקרר מכני חברת אפולו', price: 200, image: fridge, isSold: true, isAvailableInJune: true},
            {id: '1513', name: 'תבנית אפייה', description: ' תבנית אפייה לעוגה מחולק לתאים', price: 65, image: tavnit1, isSold: false, link: 'https://shop.super-pharm.co.il/home/kitchen/cooking-and-baking/baking-trays/%D7%AA%D7%91%D7%A0%D7%99%D7%AA-%D7%90%D7%A4%D7%99%D7%99%D7%94-%D7%9E%D7%97%D7%95%D7%9C%D7%A7%D7%AA-%D7%9C-18-%D7%91%D7%A8%D7%90%D7%95%D7%A0%D7%99%D7%96/p/mp-00045230'},
            // {id: '1513', name: 'תבנית אפייה', description: ' תבניות אפייה מסיליקון המחיר לשתיהן', price: 40, image: tavnit3, isSold: false},
            // {id: '1513', name: 'מיכלי אחסון וקום', description: '2 מכלי אחסון בוקום ', price: 40, image: canisters, isSold: false, link: 'https://www.uniqook.co.il/shop/%D7%A1%D7%98-2-%D7%9E%D7%99%D7%9B%D7%9C%D7%99-pop-%D7%A8%D7%91%D7%95%D7%A2-%D7%A7%D7%98%D7%9F-%D7%A7%D7%A6%D7%A8-1-%D7%9C%D7%99%D7%98%D7%A8/'}
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
            {id: '19', name: 'כסא אוכל', description: 'כסא מאיקאה כולל כרית פנימית', price: 70, image: babyFoodChair, isSold: true , isAvailableInJune: false },
            {id: '21', name: 'מיטת תינוק', description: 'מיטה עם מזרון ', price: 350, image: babyBed, isSold: true, isAvailableInJune: false },
            {id: '24', name: 'מנשא 1', description: 'מנשא בייבי ביורן' , price: 250, image: carry1, isSold: false, isAvailableInJune: false },
            {id: '25', name: 'מנשא 2', description: 'מנשא argobaby' , price: 200, image: carry2, isSold: true, isAvailableInJune: false },
            {id: '27', name: 'בייבי סנס', description: 'מוניטור לשינה' , price: 50, image: monitor, isSold: true, isAvailableInJune: false },
            {id: '281', name: 'אמבטיה', description: 'אמבטית רחצה לתינוק שילב עם מעמד מתקפל, מתאימה לאמוד בתוך אמבטיה' , price: 50, image: bath, isSold: true, isAvailableInJune: false },
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
            {id: '31', name: 'כוורת איקיאה', description: 'כוורת דגם kallax לבנה', price: 200, image: kavaret, isSold: false, isAvailableInJune: false },
            {id: '32', name: 'שידה להחתלה', description: 'שידה למסירה', price: 0, image: shida, isSold: false, isAvailableInJune: false },
            {id: '321', name: 'מיטת ילדים', description: 'מיטת מעבר, כולל מעקה ומזרון', price: 100, image: bed, isSold: false, isAvailableInJune: false },
        ]
    },
    {
        categoryName: 'עיצוב וקישוט הבית',
        categoryDescription: 'דברים קטנים וגדולים שמוסיפים עיצוב לבית',
        roomPictures: [],
        items: [
            {id: '9', name: ' ״אוזן הפיל״', description: 'עציץ בינוני', price: 80, image: plant2, isSold: false, isAvailableInJune: false },
            {id: '102', name: 'סלסלות', description: '2 סלסלות קש ניתן לקנות גם חלק', price: 100, image: baskets, isSold: false, isAvailableInJune: false },
            {id: '102', name: 'מנורה', description: 'מנורת שולחן עבודה', price: 50, image: lamp1, isSold: false, isAvailableInJune: false },
            {id: '34', name: 'לוח שעם', description: 'לוח שעם, האייל כלול' , price: 20, image: messageBoard, isSold: false, isAvailableInJune: false },
            {id: '34', name: 'עציצים', description: 'כל מיני סוגים בכל מיני גדלים' , price: 20, image: plants, isSold: false, isAvailableInJune: false },
            {id: '34', name: 'עצי פרי', description: 'אבוקדו לימון ורימון - בני שנתיים, גדלים בעציצים' , price: 50, image: trees, isSold: true, isAvailableInJune: false },
        ]
    },
    {
        categoryName: 'ציוד טיולים',
        categoryDescription: 'קאמפיניג עד אופניים',
        roomPictures: [],
        items: [
            {id: '40', name: 'מזרוני טיולים', description: 'מזרונים אישיים' , price: 20, image: matressOut, isSold: false, isAvailableInJune: false},
            {id: '41', name: 'פויקה ומחבתות', description: 'פוייקה 4, שתי מחבתות למדורה, פויקה קטנטן. המחיר להכל ניתן לקנות חלק' , price: 250, image: potsPans, isSold: true, isAvailableInJune: false },
            {id: '42', name: 'בריכה מתקפלת', description: 'בריכת שכשוך עם גגון' , price: 50, image: pool, isSold: true, isAvailableInJune: false },
            {id: '42', name: 'ערסלים', description: '2 ערסלים' , price: 20, image: hamock, isSold: true, isAvailableInJune: false },
        ]
    },
    {
        categoryName: 'דברים נוספים',
        categoryDescription: 'עוד דברים מרחבי הבית',
        roomPictures: [],
        items: [
            {id: '43', name: 'מזרון זוגי גדול', description: 'מזרון של דוקטור גב תלת שכבתי triple system גודל: 1.60 על 1.90', price: 2500, image: matress, isSold: false, isAvailableInJune: false, link: 'https://www.dr-gav.co.il/sleep/mattresses/twin-mattresses' },
            {id: '45', name: 'סט ספריות', description: 'סט ספריות דגם billy ניתן לקנות גם חלקים' , price: 1000, image: largeShelves, isSold: false, isAvailableInJune: false, link: 'https://www.ikea.com/il/he/p/billy-bookcase-white-stained-oak-veneer-90404209/#content' },
            {id: '46', name: 'שולחן סלון', description: 'שולחן סלון שלושה חלקים של שומרת הזורע' , price: 500, image: livingRoomTable, isSold: false, isAvailableInJune: false },
            {id: '46', name: 'מייבש', description: 'מייבש של חברת - נפח -' , price: 500, image: dryier, isSold: true, isAvailableInJune: false, link: "https://www.prec.co.il/product/%D7%9E%D7%99%D7%99%D7%91%D7%A9-%D7%9B%D7%91%D7%99%D7%A1%D7%94-7-%D7%A7%D7%92--electrolux-%D7%A7%D7%95%D7%A0%D7%93%D7%A0%D7%A1%D7%95%D7%A8-%D7%93%D7%9C%D7%AA-%D7%A9%D7%A7%D7%95%D7%A4%D7%94-%D7%93%D7%92%D7%9D-edp-2074g" },
            {id: '502', name: 'מנקה חלונות', description: 'מנקה חלונות חשמלי של חברת jimmy חדש לגמרי' , price: 100, image: glassCleaner, isSold: false, link: 'https://www.banggood.com/JIMMY-VW302-Cordless-Window-Glass-Vacuum-Cleaner-with-Squeegee,Spray-Bottle-p-1536802.html' },
            {id: '502', name: 'טלויזה', description: 'מסך טלוויזת סמסונג - פשוט ולא חכם' , price: 150, image: tv, isSold: false },
            {id: '504', name: 'מכשיר עיסוי', description: 'מכשיר עיסוי quad action של דוקטור גב' , price: 300, image: massager, isSold: false, isAvailableInJune: false, link: 'https://www.biogaya.co.il/home-appliance/quad-action-dr-gav?gclid=Cj0KCQjw_4-SBhCgARIsAAlegrWPCE2MLQrBRbhSBreOFqsSRyhOdxKPZkuvpt3iSHoQg-1cXfuWDUsaAnLsEALw_wcB' },
        ]
    },
    {
        categoryName: 'רכבים',
        categoryDescription: 'כלי התחבורה שלנו',
        roomPictures: [],
        items: [
            {id: '51', name: 'קיה פיקנטו', description: 'קיה פיקאנטו 2013, 120000 קמ, טסט מנומבר האחרון', price: 31500, image: kia, isSold: true, isAvailableInJune: false },
            {id: '52', name: 'טיוטה קורולה', description: 'טיוטא קורולה 2011, 230000 קמ, יד 3 , טסט עד אוגוסט ' , price: 28000, image: toyota, isSold: true, isAvailableInJune: false },
        ]
    }
]