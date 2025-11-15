'use client'
import { motion } from 'framer-motion'

import { 
  fadeInDown
} from '@/utils/animations'

export default function Resume() {
	return (
		<div className="container max-w-7xl mx-auto py-12">
			<motion.h1
				className="text-4xl font-bold mb-8 text-center"
				{...fadeInDown}
			>
				Resume
			</motion.h1>

			<div className="mt-8">
				<div className="w-full" style={{ height: 'calc(100vh - 220px)' }}>
					<iframe
						src="../resume/iqbal.pdf"
						className="w-full h-full border"
						title="Resume PDF"
					/>
				</div>
				<div className="mt-2 text-center text-sm text-slate-500">
					If the PDF does not display, <a className="underline" href="../resume/iqbal.pdf" target="_blank" rel="noreferrer">open it in a new tab</a>.
				</div>
			</div>
		
		</div>
	)
};