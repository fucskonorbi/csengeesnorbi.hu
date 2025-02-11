from PIL import Image

def crop_bottom(input_path, output_path, crop_percentage=15):
    # Open the webp image
    img = Image.open(input_path)
    
    # Calculate dimensions
    width, height = img.size
    crop_height = int(height * (100 - crop_percentage) / 100)
    
    # Crop the image
    cropped_img = img.crop((0, 0, width, crop_height))
    
    # Save as webp
    cropped_img.save(output_path, 'webp')

if __name__ == '__main__':
    input_file = 'src/assets/hero.webp'
    output_file = 'src/assets/hero-cropped.webp'
    crop_bottom(input_file, output_file)