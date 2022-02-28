import livingRoom1 from "../images/gray-living-room-01.jpeg";
import livingRoom2 from "../images/living-room-2.jpeg";
import livingRoom3 from "../images/living-room3.jpeg";
import table from "../images/table.jpeg";
import chair from "../images/chair.webp";

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
            {id: '1', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: table, isSold: false, isAvailableInJune: false },
            {id: '2', name: 'כיסא', description: 'כיסא מאיקיא מדגם kjzh בצבע לבן - ישנם שתיים כאלה' , price: 50, image: chair, isSold: false, isAvailableInJune: true },
            {id: '3', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: table, isSold: false,},
            {id: '4', name: 'כיסא', description: 'כיסא מאיקיא מדגם kjzh בצבע לבן - ישנם שתיים כאלה', price: 50, image: chair, isSold: true, isAvailableInJune: true}
        ]
    },
    {
        categoryName: 'חדר שינה',
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