from PIL import Image
import sys
import os

def convert_to_webp(input_path):
    """Convert JPG/PNG image to optimized WebP format and resize if dimensions exceed 1000px"""
    try:
        # Check if input file exists
        if not os.path.exists(input_path):
            print(f"Error: Input file '{input_path}' does not exist")
            return False
            
        # Check if input is JPG or PNG
        if not input_path.lower().endswith(('.jpg', '.jpeg', '.png')):
            print("Error: Input file must be a JPG or PNG image")
            return False

        # Open the image
        image = Image.open(input_path)
        
        # Get original dimensions
        width, height = image.size
        
        # Only resize if both dimensions are over 1000px
        if width > 1000 and height > 1000:
            new_width = width // 2
            new_height = height // 2
            image = image.resize((new_width, new_height), Image.Resampling.LANCZOS)
            print(f"Resizing image from {width}x{height} to {new_width}x{new_height}")
        else:
            print(f"Image dimensions {width}x{height} are suitable, skipping resize")
            new_width, new_height = width, height
        
        # Create output filename
        output_path = os.path.splitext(input_path)[0] + '.webp'
        
        # Convert and save as WebP with optimization
        image.save(output_path, 'WEBP', quality=90, method=6)
        
        print(f"Successfully converted {input_path} to {output_path}")
        return True
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return False

def process_directory(directory_path):
    """Process all JPG and PNG files in the given directory"""
    if not os.path.exists(directory_path):
        print(f"Error: Directory '{directory_path}' does not exist")
        return False
        
    if not os.path.isdir(directory_path):
        print(f"Error: '{directory_path}' is not a directory")
        return False
        
    success_count = 0
    failed_count = 0
    
    for filename in os.listdir(directory_path):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            input_path = os.path.join(directory_path, filename)
            if convert_to_webp(input_path):
                success_count += 1
            else:
                failed_count += 1
    
    print(f"\nProcessing complete:")
    print(f"Successfully converted: {success_count} images")
    print(f"Failed conversions: {failed_count} images")
    return success_count > 0

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python optimizer.py <input_jpg_file_or_directory>")
    else:
        input_path = sys.argv[1]
        if os.path.isdir(input_path):
            process_directory(input_path)
        else:
            convert_to_webp(input_path)
