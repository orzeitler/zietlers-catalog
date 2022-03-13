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

import kidsTheme1 from "../images/kidsRoom/kids_theme1.jpg";
import kidsTheme2 from "../images/kidsRoom/kids_theme2.jpg";
import kidsTheme3 from "../images/kidsRoom/kids_theme3.jpg";
import shelves from "../images/kidsRoom/shelves.jpg";
import bedChair from "../images/kidsRoom/bed_chair.jpg";
import lamp from "../images/kidsRoom/lamp.jpg";
import shida from "../images/kidsRoom/shida.jpg";

import officeTheme1 from "../images/office/office_theme1.jpg";
import officeTheme2 from "../images/office/office_theme2.jpg";
import officeChair from "../images/office/office_chair.jpg";
import messageBoard from "../images/office/message_board.jpg";
import magnetBoard from "../images/office/magnet_board.jpg";
import printer from "../images/office/printer.jpg";
import deco from "../images/office/deco.jpg";


export const CategoryData = [
    {
        categoryName: 'סלון',
        categoryDescription: 'כל הפריטים למכירה - כולל התמונות והווילנות',
        roomPictures: [
            {imageSrc: livingRoom1, description: 'תיאור כלשהוא'},
            {imageSrc: livingRoom2, description: 'עוד אפשרות לטקסט'},
            {imageSrc: livingRoom3},
        ],
        items: [
            {id: '1', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: chair, isSold: false, isAvailableInJune: false },
            {id: '2', name: 'כיסא', description: 'כיסא מאיקיא מדגם kjzh בצבע לבן - ישנם שתיים כאלה' , price: 50, image: curtain, isSold: false, isAvailableInJune: true },
            {id: '3', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: entranceShelf, isSold: false},
            {id: '4', name: 'כיסא', description: 'כיסא מאיקיא מדגם kjzh בצבע לבן - ישנם שתיים כאלה', price: 50, image: mirror, isSold: true, isAvailableInJune: true},
            {id: '5', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: pic1, isSold: false, isAvailableInJune: false },
            {id: '6', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: pic2, isSold: false, isAvailableInJune: false },
            {id: '7', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: pic3, isSold: false, isAvailableInJune: false },
            {id: '8', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: plant1, isSold: false, isAvailableInJune: false },
            {id: '9', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: plant2, isSold: false, isAvailableInJune: false },
            {id: '10', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: plant3, isSold: false, isAvailableInJune: false },
            {id: '11', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: rug, isSold: false, isAvailableInJune: false },
            {id: '12', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: sofa, isSold: false, isAvailableInJune: false },
            {id: '13', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: table, isSold: false, isAvailableInJune: false }
        ]
    },
    {
        categoryName: 'מטבח',
        categoryDescription: 'כלי מטבח, מכשירי חשמל ועוד..',
        roomPictures: [
            {imageSrc: kitchenFullRoom, description: ''},
            {imageSrc: kitchenFullRoomR, description: ''},
            {imageSrc: kitchenFullRoomL, description: ''},
        ],
        items: [
            {id: '14', name: 'תנור אפייה', description: 'תנור אפייה AEG דגם BPE255632W, בילט-אין ופירוליטי עם מסילות טלסקופיות + 3 תבניות אפייה ורשת צלייה. נרכש בנובמבר 2018', price: 1600, image: oven, isSold: false, isAvailableInJune: false },
            {id: '15', name: 'סט סכיני שף', description: 'סט 6 סכיני שף מסדרת טום אביב של ARCOSTEEL + מעמד' , price: 380, image: knives, isSold: false, isAvailableInJune: false, link: 'https://www.ratdesign.co.il/%D7%A1%D7%98-%D7%A1%D7%9B%D7%99%D7%A0%D7%99-%D7%A9%D7%A3-7-%D7%97%D7%9C%D7%A7%D7%99%D7%9D-%D7%A1%D7%93%D7%A8%D7%AA-%D7%98%D7%95%D7%9D-%D7%90%D7%91%D7%99%D7%91-%D7%9E%D7%A2%D7%9E%D7%93-%D7%99%D7%95%D7%A7%D7%A8%D7%AA%D7%99-%D7%9E%D7%A2%D7%A5-%D7%9E%D7%91%D7%99%D7%AA-%D7%90%D7%A8%D7%A7%D7%95%D7%A1%D7%98%D7%99%D7%9C/p-910.htm' },
        ]
    },
    {
        categoryName: 'ציוד תינוקות',
        categoryDescription: 'כמה שהם קטנים יש להם הכי הרבה דברים',
        roomPictures: [
            {imageSrc: babyTheme}
        ],
        items: [
            {id: '16', name: 'לול', description: 'לול מתקפל', price: 200, image: babyCrib1, isSold: false, isAvailableInJune: false },
            {id: '17', name: 'משטח פעילות', description: 'משטח פעילות פאזל', price: 200, image: activityMatres, isSold: false, isAvailableInJune: false },
            {id: '18', name: 'כדור פילאטיס', description: 'חובה לכל מוציא גראפסים מקצועי', price: 100, image: pilatesBall, isSold: false, isAvailableInJune: false },
            {id: '19', name: 'כסא אוכל', description: 'כסא מאיקיאה', price: 70, image: babyFoodChair, isSold: false, isAvailableInJune: true },
            {id: '20', name: 'כסאות בטיחות לאוטו', description: 'כסאות עם בין שנה ל4 שנים תקינות', price: 50, image: carChairs, isSold: false, isAvailableInJune: false },
            {id: '21', name: 'מיטת תינוק', description: 'מיטה עםן מזרון ונחשוש', price: 200, image: babyBed, isSold: false, isAvailableInJune: true },
            {id: '22', name: 'קישוטי קיר', description: 'ציורי יד על ידי האומנית ״חווה״', price: 50, image: wallDecorations, isSold: false, isAvailableInJune: false },
            {id: '23', name: 'רדיאטור', description: 'רדיאטור 8 פסים' , price: 100, image: radiator, isSold: false, isAvailableInJune: false },
            {id: '24', name: 'מנשא 1', description: 'מנשא מדגם משהו' , price: 100, image: carry1, isSold: false, isAvailableInJune: false },
            {id: '25', name: 'מנשא 2', description: 'מנשא מדגם משהו' , price: 100, image: carry2, isSold: false, isAvailableInJune: false },
            {id: '26', name: 'עגלה', description: 'עגלה אמבטיה + ישיבה, באה עם סט בדים להחלפה מלאה' , price: 300, image: stroller, isSold: false, isAvailableInJune: false },
            {id: '27', name: 'מוניטור', description: 'מוניטור לשינה' , price: 100, image: monitor, isSold: false, isAvailableInJune: false },
            {id: '28', name: 'ילדה', description: 'להשכרה בלבד לעד שלושה ימים - ילדה ממש מתוקה ביום, במהלך הלילה מתעוררת 5 פעמים, לא רוצה בקבוק ורק יונקת, אנחנו עייפים' , price: -3000, image: babyNetta, isSold: false, isAvailableInJune: false },
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
            {id: '29', name: '5 מדפים מרובעים', description: 'מדפים מאיקיאה', price: 150, image: shelves, isSold: false, isAvailableInJune: false },
            {id: '30', name: 'כורסה נפתחת למיטת יחיד', description: 'כורסא נפתחת למיטת יחיד, באה עם ארגז קטן', price: 200, image: bedChair, isSold: false, isAvailableInJune: false },
            {id: '31', name: 'מנורת קריאה', description: 'מנורת דובי פנדה', price: 50, image: lamp, isSold: false, isAvailableInJune: false },
            {id: '32', name: 'שידה', description: 'שידה למסירה', price: 0, image: shida, isSold: false, isAvailableInJune: false },
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
            {id: '33', name: 'כסא משרדי', description: 'כסא משרדי מאיקאה', price: 150, image: officeChair, isSold: false, isAvailableInJune: false },
            {id: '34', name: 'לוח שעם', description: 'לוח שעם, האייל כלול' , price: 50, image: messageBoard, isSold: false, isAvailableInJune: true },
            {id: '35', name: 'לוח מגנטי', description: 'לוח מגנטי לתמונות הודעות' , price: 50, image: magnetBoard, isSold: false, isAvailableInJune: true },
            {id: '36', name: 'מדפסת', description: 'מדפסת hp דגם כלשהו - מגיע עם מחסנית דיו חדשה' , price: 100, image: printer, isSold: false, isAvailableInJune: true },
            {id: '37', name: 'ממסר deco', description: '2 מכשירי mesh של חברת deco' , price: 100, image: deco, isSold: false, isAvailableInJune: true },
        ]
    }
]