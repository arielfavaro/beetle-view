import { Html } from "@react-three/drei";

export default function PricingExample(props) {
    return (
        <Html
            transform
            {...props}
        >
            <div className='bg-white border rounded-xl p-2 w-64'>
                <h2 className='font-bold text-3xl'>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='py-2'>
                    <h3 className='font-semibold text-xl'>Pricing</h3>
                    <button className='bg-indigo-400 text-white rounded px-4 py-2' disabled>Add Cart</button>
                </div>
            </div>
        </Html>
    );
}