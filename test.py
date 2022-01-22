with open("Procfile", 'rb') as f:
    # print(f.read().decode('utf-8'))
    with open("Procfile2", "w+b") as f2:
        content = f.read()
        f2.write(content.decode("utf-16").encode("utf-8"))
