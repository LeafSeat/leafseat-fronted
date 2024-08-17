import { useReadContract, useWriteContract } from "wagmi";
import { AdminAbi } from "../constants/abis/AdminAbi";
import { NFTAbi } from "../constants/abis/NFTAbi";
import { useState , useEffect} from "react";
import { TokenAbi } from "../constants/abis/TokenAbi";
import {
  Box,
  Button,
  Dialog,
  Flex,
} from "@radix-ui/themes";
import {
  Input,
} from "@nextui-org/react";
const adminAddress = '0x77a4e52be5D19980f95A70Cf5a7cba7600d968c1';
const NFTAddress = '0x6557a258194843738DD3615525f2DFCb5593A931';
const TokenAddress = '0xa1De1281a9560177DD78CE192F23995d71AbfAc9';
const USDTAddress = '0xFD6Cb145D3D6e63adBe33C7A787a01E755aBeC10';

function Buy({room,seat}) {
    
    const { writeContract } = useWriteContract();
    // const [tokenId,setTokenId] = useState('');

    const {data: tokenId} = useReadContract({
        abi: NFTAbi,
        address: NFTAddress,
        functionName: 'getTokenId',
        args: [room,seat]
    })

    function handleBuy() {

        // const _tokenId = BigInt(tokenId);
        if (tokenId != null) {
            writeContract({
                abi: AdminAbi,
                address: adminAddress,
                functionName: 'buy',
                args: [tokenId],
            })
        }

    }

    return (
        <div>
            <Button className="!bg-[#4FC3F7]" variant="primary" onClick={handleBuy}>
                Buy
            </Button>
        </div>
    )

}

function Rent({room,seat}) {

    const { writeContract } = useWriteContract();
    // const [tokenId,setTokenId] = useState('');

    const {data: tokenId} = useReadContract({
        abi: NFTAbi,
        address: NFTAddress,
        functionName: 'getTokenId',
        args: [room,seat]
    })

    function handleRent() {
        
        if (tokenId != null) {
            writeContract({
                abi: AdminAbi,
                address: adminAddress,
                functionName: 'rent',
                args: [tokenId]
            })
        }
        
    }

    return (
        <div>

            <Button className="!bg-[#4FC3F7]" variant="primary" onClick={handleRent}>
                Rent
            </Button>
        </div>
    )
    
}

function Film({room}) {
        
    const { writeContract } = useWriteContract();
    // const [room,setRoom] = useState('');

    function handleFilm() {
        
        const _room = Number(room);

        writeContract({
            abi: AdminAbi,
            address: adminAddress,
            functionName: 'film',
            args: [_room],
        })
    }

    return (
        <div>
            <Button className="!bg-[#4FC3F7]" variant="primary" onClick={handleFilm}>
                Film
            </Button>
        </div>
    )
}

function NFTList() {
    
    type NFT = {
        number: number;
        price: bigint;
        awardUSTD: bigint;
        awardToken: bigint;
        isRenting: boolean;
        isSelling: boolean;
    }

    const [NFTdata,setNFTdata] = useState(null);

    const {data: NFTsData} = useReadContract({
        abi: NFTAbi,
        address: NFTAddress,
        functionName: 'getAllNFT',
        args: [],
    })

    const NFTs = (NFTsData || []);




    return (
        <div>
            <h1>NFTList</h1>
            <ul>
                {NFTs.map((NFT,index) => (
                    <li key ={index}>
                    <p>TokenID: {index}</p>
                    <p>Number: {NFT.number}</p>
                    <p>Price: {Number(NFT.price)}</p>
                    <p>awardUSDT: {Number(NFT.awardUSDT)}</p>
                    <p>awardUSDT: {Number(NFT.awardToken)}</p>
                    <p>IsRenting: {NFT.isRenting.toString()}</p>
                    <p>IsSelling: {NFT.isSelling.toString()}</p>
                </li>
                ))}
            </ul>
        </div>
    )

}

function BalanceOf() {
    
    const {data: TokenBalance} = useReadContract({
        abi: TokenAbi,
        address: TokenAddress,
        functionName: 'balanceOf',
        args: ['0x70997970C51812dc3A010C7d01b50e0d17dc79C8'],
    })

    const {data: USDTBalance} = useReadContract({
        abi: TokenAbi,
        address: USDTAddress,
        functionName: 'balanceOf',
        args: ['0x70997970C51812dc3A010C7d01b50e0d17dc79C8'],
    })
    return (
        <div>
            <h1>TokenBalance</h1>
            <h2>{Number(TokenBalance)}</h2>
            <h1>USDTBalance</h1>
            <h2>{Number(USDTBalance)}</h2>
        </div>
    )

}

function Withdraw({room,seat}) {
    
    const { writeContract } = useWriteContract();
    const {data: tokenId} = useReadContract({
        abi: NFTAbi,
        address: NFTAddress,
        functionName: 'getTokenId',
        args: [room,seat]
    })

    function handleWithdraw() {

        writeContract({
            abi: AdminAbi,
            address: adminAddress,
            functionName: 'withdraw',
            args: [tokenId],
        })
    }

    return (
        <div>

            <Button className="!bg-[#4FC3F7]" variant="primary" onClick={handleWithdraw}>
                Withdraw
            </Button>

        </div>
    )
}

function Mint({room,seat}) {
    
    const {writeContract} = useWriteContract();
    const [tokenId,setTokenId] = useState('');
    // const [room,setRoom] = useState('');
    // const [seat,setSeat] = useState('');
    const [number,setNumber] = useState('');
    const [price,setPrice] = useState('');
    const [awardUSDT,setAwardUSDT] = useState('');
    const [awardToken,setAwardToken] = useState('');
    
    function handleMint() {


        
        const _tokenId = BigInt(tokenId);
        const _room = Number(room);
        const _seat = Number(seat);
        const _number = Number(number);
        const _price = BigInt(price);
        const _awardUSDT = BigInt(awardUSDT);
        const _awardtoken = BigInt(awardToken);

        
        writeContract({
            abi: NFTAbi,
            address: NFTAddress,
            functionName: 'mint',
            args: [_tokenId,_room,_seat,_number,_price,_awardUSDT,_awardtoken],
        })
    }

    return (
        <div>
            <h1>Mint</h1>
            <h2>Room: {Number(room)}</h2>
            <h2>Seat: {Number(seat)}</h2>
            <Input
                type="text"
                placeholder='Enter TokenId'
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
            />
            <Input
                type="text"
                placeholder='Enter Number'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <Input
                type="text"
                placeholder='Enter Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <Input
                type="text"
                placeholder='Enter AwardUSDT'
                value={awardUSDT}
                onChange={(e) => setAwardUSDT(e.target.value)}
            />
            <Input
                type="text"
                placeholder='Enter AwardToken'
                value={awardToken}
                onChange={(e) => setAwardToken(e.target.value)}
            />
            <Button className="!bg-[#4FC3F7]" variant="primary" onClick={handleMint}>
                Mint
            </Button>
        </div>
    )
}

function GetNFT1({room,seat}) {

    const {data: tokenId} = useReadContract({
        abi: NFTAbi,
        address: NFTAddress,
        functionName: 'getTokenId',
        args: [room,seat]
    })

    // if (tokenId != null) {
    //     const {data: NFTdata} = useReadContract({
    //         abi: NFTAbi,
    //         address: NFTAddress,
    //         functionName: 'getNFT',
    //         args: [tokenId],
    //     })
    // } else {
    //     const NFTdata = null;
    // }


    const [NFTdata,setNFTdata] = useState(null);
    
    const _NFT = (NFTdata || [])

    return (
        <GetNFT2 tokenId={tokenId} room={room} seat={seat}/>
    )
}


function GetNFT2({ tokenId,room,seat }) {
    const [NFTdata, setNFTdata] = useState(null);
    const [isRenting,setIsRenting] = useState(true);
    const [isSelling,setIsSelling] = useState(true);

    const { data: _NFTdata } = useReadContract({
        abi: NFTAbi,
        address: NFTAddress,
        functionName: 'getNFT',
        args: [tokenId],
    });

    useEffect(() => {
        if (_NFTdata) {
            setNFTdata(_NFTdata);
            setIsRenting(_NFTdata[4]);
            setIsSelling(_NFTdata[5])
        }
    }, [_NFTdata]);

    return (
        <div>
            {NFTdata === null  ? (
                <p>No NFT</p>
            ):(
                    <div>
                        <h1>{Number(tokenId)}</h1>
                        <p>TokenID: {Number(tokenId)}</p >
                        <p>Room: {room}</p>
                        <p>Seat: {seat}</p>
                        <p>Number: {NFTdata[0]}</p >
                        <p>Price: {Number(NFTdata[1])}</p >
                        <p>awardUSDT: {Number(NFTdata[2])}</p >
                        <p>awardUSDT: {Number(NFTdata[3])}</p >
                        <p>IsRenting: {isRenting.toString()}</p >
                        <p>IsSelling: {isSelling.toString()}</p >

                    </div>
                )}
            
        </div>
    );
}

function Renter(room , seat) {

    const {data: tokenId} = useReadContract({
        abi: NFTAbi,
        address: NFTAddress,
        functionName: 'getTokenId',
        args: [room,seat]
    })
    return (
        <div>
            {Number(tokenId)==0&&seat!=0 ? (
                <p>No NFT</p>
            ) : (
                <><GetNFT2 tokenId={tokenId} room={room} seat={seat} /><Withdraw room={room} seat={seat} /></>
            )}
        </div>
    )
}

function Cinema({room , seat}) {

    const {data: tokenId} = useReadContract({
        abi: NFTAbi,
        address: NFTAddress,
        functionName: 'getTokenId',
        args: [room,seat]
    })
    return (
        <div>
            {Number(tokenId) == 0&&seat != 0 ? (
                <Mint room = {room} seat = {seat} />
            ) : (
                <><GetNFT2 tokenId={tokenId} room={room} seat={seat} /><Buy room={room} seat={seat} /></> 
            )}
        </div>
    )
}

export {Buy,Rent,Film,NFTList,BalanceOf,Withdraw,Mint,GetNFT1,Cinema}