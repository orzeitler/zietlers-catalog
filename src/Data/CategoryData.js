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
        categoryName: 'ציוד תינוקות',
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
        categoryName: 'ילדים',
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