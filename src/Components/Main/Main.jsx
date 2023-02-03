import React from "react";
import "./Main.css";

function Main() {
  let arr = [
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg",
      name: "HERE&NOW",
      desc: "Slim fit Casual shirt",
      price: 749,
      mrp: 1499,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21718204/2023/1/27/950ad1e5-827c-46ab-abe9-e8f3f56c1c701674801683981PowerlookMenCream-ColouredSlimFitCasualShirt1.jpg",
      name: "PowerLook",
      desc: "Men Slim Fit Casual Shirt",
      price: 1449,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
      name: "Dennis Lingo",
      desc: "Men Slim Fit Casual Shirt",
      price: 610,
      mrp: 1849,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg",
      name: "Dennis Lingo",
      desc: "Men Slim Fit Casual Shirt",
      price: 610,
      mrp: 1849,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11361288/2020/2/4/d67d40eb-4814-42d2-8325-bda8017b5ee41580821208963-WROGN-Men-Shirts-4521580821207000-1.jpg",
      name: "WROGN",
      desc: "Men Slim Fit Casual Shirt",
      price: 989,
      mrp: 2199,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6714923/2019/3/6/343e1235-336c-401e-beab-afbb828448231551863812172-Dennis-Lingo-Men-Black-Slim-Fit-Solid-Casual-Shirt-473155186-1.jpg",
      name: "Dennis Lingo",
      desc: "Men Slim Fit Casual Shirt",
      price: 610,
      mrp: 1849,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
      name: "HIGHLANDER",
      desc: "Men Slim Fit Casual Shirt",
      price: 549,
      mrp: 1099,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16532688/2021/12/16/b9944013-0b1b-4d7d-8278-4fafd118da351639640786257Shirts1.jpg",
      name: "HIGHLANDER",
      desc: "Slim fit Casual shirt",
      price: 531,
      mrp: 1399,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20145604/2022/9/23/1c90ebbd-abb9-4599-99c0-73b1f5ccad801663935991365Shirts1.jpg",
      name: "HIGHLANDER",
      desc: "Slim fit Casual shirt",
      price: 351,
      mrp: 1849,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10685396/2019/10/29/dbc7e911-5335-4881-922b-a9a4270465fa1572339114566-WROGN-Men-White-Slim-Fit-Solid-Casual-Shirt-301572339112865-1.jpg",
      name: "WROGN",
      desc: "Men Slim Fit Casual Shirt",
      price: 1099,
      mrp: 2199,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1291760/2017/12/5/11512469309123-Highlander-Dark-Green-Slim-Fit-Casual-Shirt-5071512469308877-1.jpg",
      name: "HIGHLANDER",
      desc: "Slim fit Casual shirt",
      price: 549,
      mrp: 999,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21137108/2022/12/9/ff0b8bc0-1194-4eb1-b681-6ff6d183e4081670584215775MenMaroonAthleticFitCasualShirts1.jpg",
      name: "PETER ENGLAND",
      desc: "Slim fit Casual shirt",
      price: 1299,
      mrp: 1999,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16532696/2021/12/16/858351ae-13d7-41c9-98f9-13486c0696d81639640760730HIGHLANDERMenWhiteSlimFitCasualShirt1.jpg",
      name: "HIGHLANDER",
      desc: "Men White Slimfit Casual shirt",
      price: 531,
      mrp: 1399,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19024438/2022/11/28/0e43918f-40a5-4674-869b-8403f5e00a861669618336755-Blackberrys-Men-Shirts-8981669618336289-1.jpg",
      name: "Blackberrys",
      desc: "Cotton Slim Fit Casual Shirt",
      price: 1077,
      mrp: 1795,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12275262/2020/9/11/7d660609-4020-476f-8956-ccf2ce2bbc281599827077562-WROGN-Men-Shirts-8491599827075374-1.jpg",
      name: "WROGN",
      desc: "Men Slim Fit Casual Shirt",
      price: 1099,
      mrp: 2199,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20344070/2023/1/16/24d34ec2-0284-4124-9b85-3c811110bafb1673850386425-Park-Avenue-Men-Pure-Cotton-Slim-Fit-Casual-Shirt-1301673850-1.jpg",
      name: "Park Avenue",
      desc: "Men Casual Shirt",
      price: 1154,
      mrp: 2099,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19694418/2022/9/26/4cb24ca9-9749-4e84-8925-e00a41852fcc1664187612034HIGHLANDERMenWhiteSlimFitCasualShirt1.jpg",
      name: "HIGHLANDER",
      desc: "Slim fit Casual shirt",
      price: 499,
      mrp: 999,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/4/15/c9db31af-82c0-4dfb-819a-3756f6c4f6641618481572076-1.jpg",
      name: "Dennis Lingo",
      desc: "Slim Fit Casual Shirt",
      price: 610,
      mrp: 1849,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15193830/2021/8/19/7a2906ab-80c2-4581-a103-f4f7c999d6311629347743989SlimFitEasy-ironshirt1.jpg",
      name: "H&M",
      desc: "Men Slim Fit Easy Iron Shirt",
      price: 1299,
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1830428/2022/3/30/34b48e2b-6cc2-4d39-bbc3-340b89f732cb1648617027870-Hancock-Men-White-Slim-Fit-Formal-Shirt-5091648617027332-1.jpg",
      name: "Hancock",
      desc: "Cotton Slim Fit Tuxedo Shirt",
      price: 759,
      mrp: 1899,
    },
  ];

  function convertData(arr) {
    return arr.reduce((acc, curr, index) => {
      const subArrayIndex = Math.floor(index / 5);
      if (!acc[subArrayIndex]) acc[subArrayIndex] = [];
      acc[subArrayIndex].push(curr);
      return acc;
    }, []);
  }

  return (
    <div className="main">
      <div
        style={
          {
            // height: "max-content",
          }
        }
      >
        {convertData(arr).map((ele) => {
          return (
            <div
              style={{
                // height: "fit-content",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              {ele.map((e) => {
                return (
                  <div className="card">
                    <img width={"100%"} src={e.src} alt="shirt" />
                    <h5>{e.name}</h5>
                    <span className="span">{e.desc}</span>
                    <div
                      style={{
                        fontSize: "small",
                        marginLeft: "2%",
                        marginTop: "2%",
                      }}
                    >
                      <b>RS {e.price}</b>
                      {e.mrp && (
                        <span
                          className="span"
                          style={{
                            textDecoration: "line-through",
                            color: "#c0c0c0",
                          }}
                        >
                          RS {e.mrp}
                        </span>
                      )}
                      {e.mrp && (
                        <span className="span" style={{ color: "#ED7014" }}>
                          ({Math.round(((e.mrp - e.price) / e.mrp) * 100)}% OFF)
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
