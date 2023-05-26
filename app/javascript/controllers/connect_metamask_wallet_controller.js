import { Controller } from "@hotwired/stimulus"
import Web3 from "web3";
import Web3Modal from "web3modal";

// Connects to data-controller="connect-metamask-wallet"
export default class extends Controller {
  async click() {
    const providerOptions = {
      /* See Provider Options Section */
    };

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });

    const provider = await web3Modal.connect();

    const web3 = new Web3(provider);
  }
}
