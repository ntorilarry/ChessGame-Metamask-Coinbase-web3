import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import "../../css/login.css";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Bgr from "../../../core/resources/images/BG.jpg";
import { useAuth } from "../auth/auth";
import Metaicon from "../../../core/resources/images/metamaskicon.png";
import Coinbaseicon from "../../../core/resources/images/coinbase-v2-svgrepo-com.svg";

function Login() {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);
  const auth = useAuth();

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      if (
        window.confirm(
          "Non-ethereum browser detected. You should install Metamask or Coinbase"
        )
      ) {
        window.location.href = "https://metamask.io/";
      }
    }
    return provider;
  };

  async function onConnect(event) {
    event.preventDefault();
    const currentProvider = detectCurrentProvider();
    if (currentProvider) {
      currentProvider
        .request({ method: "eth_requestAccounts" })
        .then(async () => {
          try {
            await getAccounts(currentProvider);
          } catch (error) {
            console.log(error);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  async function getAccounts(currentProvider) {
    let results;
    const web3 = new Web3(currentProvider);
    web3.eth.getAccounts().then(async (res) => {
      try {
        await getBalance(web3, res[0]);
        auth.userAccount(res[0]);
      } catch (error) {
        console.log(error);
      }
    });
    return results;
  }

  async function getBalance(web3, account) {
    try {
      let ethBal = await web3.eth.getBalance(account);
      // setting the object state values
      const userObjectModel = {
        isAuth: true,
        ethBal: ethBal,
        userAccount: account,
      };

      auth.userBalance(ethBal);
      setIsConnected(true);
      auth.login(true);
      auth.login(isConnected);
      localStorage.setItem(
        "userAuthObjectModel",
        JSON.stringify(userObjectModel)
      );
      auth.login(isConnected);
      navigate("/administrator", { replace: true });
      toast.success("Login Successful");
    } catch (error) {
      console.log(error);
    }
  }

  const onDisconnect = () => {
    setIsConnected(false);
  };

  return (
    <div>
      <section className="bgr">
        <Navbar />
        <div className="relative py-12 bg-white sm:py-16 lg:py-20">
          <div className="absolute inset-0">
            <img
              className="object-cover object-center w-full h-full lg:object-center bg-white img-pic"
              src={Bgr}
              alt=""
            />
          </div>
          <div className="h-[70vh] flex justify-center items-center">
            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
                <h1 className="text-3xl text-black font-bold sm:text-6xl xl:text-5xl">
                  Welcome to Chess Games
                </h1>
                <p className="max-w-lg mx-auto mt-2 text-base font-normal leading-7 text-black ">
                  Sign in with your wallet to be able to authenticate and play
                  games
                </p>

                <div className="max-w-sm mx-auto mt-10">
                  <div>
                    <button
                      onClick={(e) => onConnect(e)}
                      type="submit"
                      className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                px-6
                                py-6
                                my-2
                                text-md
                                text-white   
                                bg-[#438FFE]
                                border border-transparent
                                rounded-full 
                                hover:bg-[#2563EB]"
                    >
                      <img className="w-6 mx-4 " src={Metaicon} alt="" />
                      Sign in with metamask
                    </button>
                    <button
                      onClick={onConnect}
                      type="submit"
                      className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                px-6
                                py-6
                                my-2
                                text-md
                                text-black
                                bg-transparent
                                border-2
                                border-black
                                rounded-full
                                hover:border-[#2563EB]
                                hover:text-[#2563EB] "
                    >
                      <img className="w-6 mx-2 " src={Coinbaseicon} alt="" />
                      Sign in with Coinbase Wallet
                    </button>
                  </div>
                </div>
                <p className="text-center mt-8">Show more options</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
