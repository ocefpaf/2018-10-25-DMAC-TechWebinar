import os
import geopandas
import pandas as pd


def load_best_track(code='al14', year='2018'):
    fname = f'{code}{year}_best_track.zip'
    url = f'https://www.nhc.noaa.gov/gis/best_track/{fname}'

    if not os.path.isfile(fname):
        import urllib.request
        urllib.request.urlretrieve(url, fname)

    os.environ['CPL_ZIP_ENCODING'] = 'UTF-8'

    radii = geopandas.read_file(
        f'/{code.upper()}{year}_radii.shp',
        vfs=f'zip://{fname}')

    pts = geopandas.read_file(
        f'/{code.upper()}{year}_pts.shp',
        vfs=f'zip://{fname}')

    pts['str'] = pts['DTG'].astype(int).astype(str)

    pts.index = pd.to_datetime(
        pts['str'], format='%Y%m%d%H', errors='coerce').values

    radii.index = pd.to_datetime(
        radii['SYNOPTIME'], format='%Y%m%d%H', errors='coerce'
    ).values
    return radii, pts
