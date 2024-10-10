import React, { useState } from "react";
import "./PhotoGallery.css";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      url: "https://scontent.falg1-2.fna.fbcdn.net/v/t39.30808-6/462654875_885764390321950_929164932333030898_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG4CakhJeHsAM9yME5DuA7X8XO7JPUZjePxc7sk9RmN4yJ8z6IAO9DIGI6YUDw0gNeCCrHiKuRbYVC3xrgMmGjC&_nc_ohc=TdkOHWUsiLAQ7kNvgHttv0i&_nc_zt=23&_nc_ht=scontent.falg1-2.fna&_nc_gid=A-x5dO43tdOgPpaFzUE-BkZ&oh=00_AYApCW286_W7SN0_gvo7Oh9BcBnJLEif2BuI6IkGlmlr8w&oe=670DC6DE",
    },
    {
      id: 2,
      url: "https://scontent.falg1-2.fna.fbcdn.net/v/t39.30808-6/462597518_885764823655240_8236262510311761458_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEJ4UeG2wUCHaLV0BVhM5i6R43u_z_L289Hje7_P8vbz9P4JCSWdvr2DP5og8JGS_8FCyB2O9GzM5RP7BwoaGBU&_nc_ohc=Twy3edwAP1kQ7kNvgH2uy6W&_nc_zt=23&_nc_ht=scontent.falg1-2.fna&_nc_gid=Aa4j60kAFPo06tfdQHJjT8i&oh=00_AYCC_Ysmx8_WSn3yufHWaDD0a0nba464awYc9wVoepV2iw&oe=670DF092",
    },
    {
      id: 3,
      url: "https://scontent.falg1-2.fna.fbcdn.net/v/t39.30808-6/460121131_868682755363447_7362532108419178996_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEm2p9Fc910Fd-aE9P2WmU0jdKTF5hwdfaN0pMXmHB19tZFAuZAcD81gfMS2BMzGal3RoRAjv-Kx5w5Zi9rgE4W&_nc_ohc=ncTLB1oA9v8Q7kNvgGH7caP&_nc_zt=23&_nc_ht=scontent.falg1-2.fna&_nc_gid=AbuWBaCnkiMsqCSahq2FoS-&oh=00_AYAvHQuyTxphvQlLNMncpVtam5XoRIcy4xnOi1bkNFe5cQ&oe=670DE198",
    },

    {
      id: 4,
      url: "https://scontent.falg1-2.fna.fbcdn.net/v/t39.30808-6/456333484_851440847087638_6167828203080951625_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGb0N0L4btnjYTdZFcvLwv7u7oWvpEIoli7uha-kQiiWBsMjoTI_Hapo1L2dNDeFaOBjWZPxyRlifiSIVCM5KpC&_nc_ohc=dfOt2RURt4wQ7kNvgExwgKH&_nc_zt=23&_nc_ht=scontent.falg1-2.fna&_nc_gid=AN9JqZy16L3sjtyvXZmMyzk&oh=00_AYA71VIrx2SeDNEGaZn1Gjw4rHXo9w51yeVjuhK4Y7MYQw&oe=670DD5DF",
    },
    {
      id: 5,
      url: "https://scontent.falg1-2.fna.fbcdn.net/v/t39.30808-6/449820024_823996786498711_7458513389464633581_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFAMyaRXmwZYfCqUhnwu8XEWrZIwVYzzeJatkjBVjPN4mpHj7LimvFOf1dDliGTyBW54u6JUkRQg_kMLQzpfoie&_nc_ohc=QMYGtwE0Q8QQ7kNvgFhR-2M&_nc_zt=23&_nc_ht=scontent.falg1-2.fna&_nc_gid=AErln92xXcnIgmoLTeKesLY&oh=00_AYBvAX03th353uvRhdkBcuynv0O8QijuFkeU5aVPyBHpoQ&oe=670DC19C",
    },
    {
      id: 6,
      url: "https://scontent.falg1-2.fna.fbcdn.net/v/t39.30808-6/448942646_814957684069288_7305865161004224834_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG1tnA9rU8VSuxmxN6GRNTSKrzEM5adLyMqvMQzlp0vI_Phs0SfsRlG2S6I6FvosHSEfUa6RZU8jDo47YzbNs3D&_nc_ohc=jXHmiVwlQsIQ7kNvgFxUgeo&_nc_zt=23&_nc_ht=scontent.falg1-2.fna&_nc_gid=AnT1QsWWGgGpVuGKoSpYd1r&oh=00_AYDpso-IaK6HfhkvsVlixRYvNBhTl1axLaqxyuLmtwiC0w&oe=670DD38Chttps://scontent.falg1-2.fna.fbcdn.net/v/t39.30808-6/448942646_814957684069288_7305865161004224834_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG1tnA9rU8VSuxmxN6GRNTSKrzEM5adLyMqvMQzlp0vI_Phs0SfsRlG2S6I6FvosHSEfUa6RZU8jDo47YzbNs3D&_nc_ohc=jXHmiVwlQsIQ7kNvgFxUgeo&_nc_zt=23&_nc_ht=scontent.falg1-2.fna&_nc_gid=AnT1QsWWGgGpVuGKoSpYd1r&oh=00_AYDpso-IaK6HfhkvsVlixRYvNBhTl1axLaqxyuLmtwiC0w&oe=670DD38C",
    },
    {
      id: 7,
      url: "https://scontent.falg1-2.fna.fbcdn.net/v/t39.30808-6/424868968_731599285738462_6238111637772348842_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFekff2gwL_lwTcbGmi4HjC49LCBf7FWx7j0sIF_sVbHs6qfjmvFnqX41338p1KhTvTRhKDUrwCj_jEbkBTMn4Z&_nc_ohc=lkyIDX7G988Q7kNvgFGvGwn&_nc_zt=23&_nc_ht=scontent.falg1-2.fna&_nc_gid=AjOD4ZTNRnFFEDnOMpA4df3&oh=00_AYBrLC-KZ8t2O21D5GT6TKuQE4dyj0o_3H4DRqVsrNCWbQ&oe=670DE0DE",
    },
    {
      id: 8,
      url: "https://scontent.falg1-2.fna.fbcdn.net/v/t39.30808-6/356813876_613622464202812_4158148111988963309_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH-xNyoDlEnQCA-XmKeB9R3s6NV0Y-H9Yezo1XRj4f1h-WTKx6iV7-wSOuneYiLuPESYdjonPVg8RKnhn-Ijwgu&_nc_ohc=UUYpePTtRW4Q7kNvgHnqsrr&_nc_zt=23&_nc_ht=scontent.falg1-2.fna&_nc_gid=AYeYAYyv5uDBfXYloqiETnI&oh=00_AYD4aTskFzblUEU1uFnL1cndcMVV_bKOy8YNohvc_y9eVQ&oe=670DC7DA",
    },

    // Add more photos to the array
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextPhoto = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= photos.length) {
      setCurrentIndex(0); // Loop back to the first photo
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePreviousPhoto = () => {
    const previousIndex = currentIndex - 1;
    if (previousIndex < 0) {
      setCurrentIndex(photos.length - 1); // Loop back to the last photo
    } else {
      setCurrentIndex(previousIndex);
    }
  };

  return (
    <div className="photo" container spacing={3}>
      <div className="photo" item xs={12}>
        <div className="photo" elevation={3}>
          <div className="photo" variant="h5"></div>
          <div className="photo" container spacing={2}>
            <div item key={photos[currentIndex].id} xs={4}>
              <img
                src={photos[currentIndex].url}
                alt={photos[currentIndex].id}
              />
            </div>
          </div>
          <button className="button1" onClick={handlePreviousPhoto}>
            Previous
          </button>
          <button className="button1" onClick={handleNextPhoto}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
