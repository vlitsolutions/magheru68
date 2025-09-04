#!/usr/bin/env python3
"""
Script to invert black pixels to white in logo image
"""

from PIL import Image
import sys
import os

def invert_logo_colors(input_path, output_path):
    """
    Convert black pixels to white in a logo image while preserving transparency
    """
    try:
        # Open the image
        img = Image.open(input_path)
        
        # Convert to RGBA if not already (to handle transparency)
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # Get image data
        data = img.getdata()
        
        # Create new image data
        new_data = []
        
        for item in data:
            r, g, b, a = item
            
            # If pixel is black or very dark (threshold of 50 for near-black)
            if r < 50 and g < 50 and b < 50 and a > 0:
                # Convert to white but keep the alpha
                new_data.append((255, 255, 255, a))
            else:
                # Keep original pixel
                new_data.append(item)
        
        # Create new image with modified data
        new_img = Image.new('RGBA', img.size)
        new_img.putdata(new_data)
        
        # Save the result
        new_img.save(output_path, 'PNG')
        print(f"Successfully created {output_path}")
        
        return True
        
    except Exception as e:
        print(f"Error processing image: {e}")
        return False

if __name__ == "__main__":
    # Paths
    input_file = "/home/vlad/projects/magheru68/charity-website/public/logo_black.png"
    output_file = "/home/vlad/projects/magheru68/charity-website/public/logo_white.png"
    
    # Check if input file exists
    if not os.path.exists(input_file):
        print(f"Input file not found: {input_file}")
        sys.exit(1)
    
    # Process the image
    success = invert_logo_colors(input_file, output_file)
    
    if success:
        print("Logo color inversion completed successfully!")
        print(f"White logo saved as: {output_file}")
    else:
        print("Failed to process the logo.")
        sys.exit(1)