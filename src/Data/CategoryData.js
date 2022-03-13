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
            {imageSrc: livingRoom1, description: 'תיאור כלשהוא'},
            {imageSrc: livingRoom2, description: 'עוד אפשרות לטקסט'},
        ],
        items: [
            {id: '1', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: table, isSold: false, isAvailableInJune: false },
            {id: '2', name: 'כיסא', description: 'כיסא מאיקיא מדגם kjzh בצבע לבן - ישנם שתיים כאלה' , price: 50, image: chair, isSold: false, isAvailableInJune: true },
        ]
    },
    {
        categoryName: 'גינה ועציצים',
        categoryDescription: 'ילדים הורים ועוד כמה רהיטים',
        roomPictures: [
            {imageSrc: livingRoom1, description: 'תיאור כלשהוא'},
            {imageSrc: livingRoom2, description: 'עוד אפשרות לטקסט'},
        ],
        items: [
            {id: '1', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: table, isSold: false, isAvailableInJune: false },
            {id: '2', name: 'כיסא', description: 'כיסא מאיקיא מדגם kjzh בצבע לבן - ישנם שתיים כאלה' , price: 50, image: chair, isSold: false, isAvailableInJune: true },
        ]
    },
    {
        categoryName: 'תינוק',
        categoryDescription: 'ילדים הורים ועוד כמה רהיטים',
        roomPictures: [
            {imageSrc: livingRoom1, description: 'תיאור כלשהוא'},
            {imageSrc: livingRoom2, description: 'עוד אפשרות לטקסט'},
        ],
        items: [
            {id: '1', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: table, isSold: false, isAvailableInJune: false },
            {id: '2', name: 'כיסא', description: 'כיסא מאיקיא מדגם kjzh בצבע לבן - ישנם שתיים כאלה' , price: 50, image: chair, isSold: false, isAvailableInJune: true },
        ]
    }
]