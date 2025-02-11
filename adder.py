from PIL import Image
import numpy as np
from PIL.ImageFilter import GaussianBlur

def extend_image(input_path, output_path, extension_percentage=15):
    # Open the image
    img = Image.open(input_path)
    
    # Convert to RGB if needed
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # Get dimensions
    width, height = img.size
    
    # Calculate extension height
    extension_height = int(height * extension_percentage / 100)
    
    # Create new blank image with extended height
    new_height = height + (2 * extension_height)  # Add extension to top and bottom
    new_img = Image.new('RGB', (width, new_height))
    
    # Paste original image in center
    new_img.paste(img, (0, extension_height))
    
    # Create blurred extensions for top and bottom
    top_section = img.crop((0, 0, width, extension_height))
    bottom_section = img.crop((0, height - extension_height, width, height))
    
    # Apply blur
    blur_radius = 300
    top_blurred = top_section.filter(GaussianBlur(blur_radius))
    bottom_blurred = bottom_section.filter(GaussianBlur(blur_radius))
    
    # Paste blurred sections
    new_img.paste(top_blurred, (0, 0))  # Top extension
    new_img.paste(bottom_blurred, (0, new_height - extension_height))  # Bottom extension
    
    # Save the result
    new_img.save(output_path)

if __name__ == '__main__':
    input_file = 'src/assets/hero.jpg'
    output_file = 'src/assets/hero-extended.jpg'
    extend_image(input_file, output_file)
